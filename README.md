# 台北城市通 - 4人團隊開發專案 (Monorepo)

本專案採用前後端分離的單一倉庫 (Monorepo) 架構，旨在高效率、高資安標準下開發市民級應用。

## 🛠️ 核心技術棧

*   **前端 (frontend):** Vue 3.6 (Vapor Mode 預備) + TypeScript + Pinia + Router + Oxfmt (Rust 驅動極速格式化)
*   **後端 (backend):** Java 21 (Virtual Threads 高併發) + Spring Boot 3.x
*   **基礎建設:** Docker Compose (PostgreSQL 16 + PostGIS 地圖外掛 + Redis 7.2)
*   **套件管理:** pnpm (前端) / Maven (後端)

---

## 🚀 團隊本地開工「黃金 3 步驟」

複製本專案到本地後，請確保電腦已啟動 **Docker Desktop**，並於根目錄依序執行：

### 1. 啟動後端基礎建設 (DB & Redis & Java)
在最外層根目錄執行，一鍵開好 PostgreSQL、Redis 並編譯 Java：
```bash
docker compose up -d
```

### 2. 安裝前端依賴
進入 `frontend` 資料夾安裝 Vue 3.6 相關套件：
```bash
cd frontend
pnpm install
```

### 3. 啟動前端開發伺服器
```bash
pnpm dev
```
*   前端開發網址: `http://localhost:5173` (視 Vite 預設而定)
*   後端 API 網址: `http://localhost:8080`

---

## 🧪 API 開發、偵錯與測試工具指南

為了確保 4 人團隊不因為 API 欄位對齊而吵架，我們統一使用以下工具鏈：

### 1. 後端 API 文件與即時測試：Scalar (Swagger 升級版)
*   **進入路徑:** 後端啟動後，瀏覽 `http://localhost:8080/scalar` (或預設的 swagger-ui 路徑)。
*   **核心功能:** 
    *   **互動式測試:** 直接在網頁上填入參數、帶入市民測試 Token，直接戳 Java 後端進行測試。
    *   **程式碼秒生成:** 點擊右側的 "Client Code"，可以直接複製專為 TypeScript / Axios 產生的呼叫代碼，前端直接貼進 `frontend/src/api` 即可。

### 2. 前端端對端與整合測試：Playwright
負責模擬真實市民在瀏覽器上的行為（如：市民登入、福利點數扣款流、場館預約）。
*   **啟動 UI 測試面板 (推薦開發時使用):**
    ```bash
    cd frontend
    pnpm playwright test --ui
    ```
*   **無頭模式執行全量測試 (進 Git 前跑一次):**
    ```bash
    cd frontend
    pnpm playwright test
    ```
*   **錄製測試指令 (懶人必備，自動幫你寫測試程式碼):**
    ```bash
    pnpm playwright codegen http://localhost:5173
    ```

---

## ✍️ 團隊代碼規範 (Code Style)

本專案已鎖死一致性排版，**請勿自行修改 VS Code 設定**。
*   **前端 (Vue/TS/JSON):** 使用 **Oxfmt** (Rust)，存檔 (`Ctrl + S`) 會在 0.001 秒內自動排版並自動排序 `import` 語句。
*   **後端 (Java):** 統一使用 **Google Java Style**，存檔時會自動清理未使用的引用並校正 4 空格縮排。
*   **Git 換行規範:** 統一強制使用 `LF`，防止 Windows 與 Mac 隊友程式碼衝突。
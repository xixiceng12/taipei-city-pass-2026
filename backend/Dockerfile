# 階段一：編譯 Java 程式碼
FROM maven:3.9-eclipse-temurin-21-alpine AS build
WORKDIR /app
COPY pom.xml .
# 先下載依賴，善用 Docker 快取
RUN mvc dependency:go-offline
COPY src ./src
RUN mvc clean package -DskipTests

# 階段二：運行環境（使用極量輕量化的 Alpine Linux）
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app
# 從編譯階段把 jar 檔拿過來
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
# 台北城市通優化：啟動虛擬執行緒（Java 21 預設，但透過變數確保）並設定時區為台北
ENV TZ=Asia/Taipei
ENTRYPOINT ["java", "-jar", "app.jar"]

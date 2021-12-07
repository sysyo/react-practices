## React Pracractices - Integration(개발 환경 통합)

## Configuration
1. Application(Project) Structure
   <pre>
   /app
    |--- /backend
    |       |--- /logging
    |       |       |--- index.js
    |       |--- /routes
    |       |       |--- [index.js]
    |       |       |--- authorized.js
    |       |       |--- error.js
    |       |--- /controllers
    |       |--- /models
    |       |--- /views
    |       |       |--- /error
    |       |               |--- [404.ejs]
    |       |               |--- [500.ejs]
    |       |--- /public
    |       |--- [index.js]
    |       |--- [app.config.env]    
    |--- /frontend
    |       |--- /config
    |       |       |--- babel.config.json
    |       |       |--- [webpack.config.json]
    |       |--- /public
    |       |       |--- favicon.ico
    |       |       |--- index.html
    |       |--- /src
    |       |--- /assets
    |--- /node_modules
    |--- package.json
    |--- package-lock.json
   </pre>
2. nodemon
3. webpack dev server
4. package.json
5. concurrently
6. node application

#### emaillist
    - 개발 통합 설정(with Node Backend)
    - backend: Fully APIs(Node Exporess기반)
    - Frontend: React(SPA)
    - AJAX: fetch 기반

#### cors란?
1. origin (= 출처)
   URL에서 protocol + host + port 를 합친 것
   ```
   > location.origin
   < 'http://localhost:9999'
   ```

2. 같은 origin vs 다른 origin

3. Same Origin Policy (SOP)
   브라우저가 동일 출처 정색책(SOP)을 지켜서 다른 출처의 리소스 접근을 금지
   - 외부 리로스를 못 가져오는 단점
   - XSS 등과 같은 보안 취약점을 사전에 방지할 수 있다.

4. 
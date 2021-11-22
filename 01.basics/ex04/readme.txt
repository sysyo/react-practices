ex04: 애플리케이션 번들링 (bundling)

1. webpack은 작게 분리된 많은 애플리케이션 모듈(js, css, images, font ... )들의 의존성을 분석해서 하나의 JS파일로 묶은 도구
2. 하나의 JS 파일을 번들(bundle)이라하고 묶는 작업을 번들링(bundling)이라고 한다.
3. 번들링은 단순히 모듈들을 하나의 파일로 묶는 작업만을 의미하지 않는다. -> 빌드 작업이 포함된다.
4. 빌드 작업이란? 
    1) linting(ESLint, 문법 체크) 작업
    2) document(JDoc) 작업 (모듈들을 문서화하는 작업)
    3) test(Mocha, Jest) 작업
    4) 난독화 작업(상수, 변수 치환...자바스크립트 코드 자체를 분석하기 어렵게 만드는 과정) / 압축 (Uglyfy - ex)개행, 주석 등 제거) 작업
    5) 번들링
5. 자바스크립트 뿐만 아니라 다양한 에셋(image, css, font)들도 모듈로 취급을 한다.
6. 설치
    $ npm i -D webpack webpack-cli
    $ npm .\node_modules\.bin\webpack --version
    $ npx webpack --version
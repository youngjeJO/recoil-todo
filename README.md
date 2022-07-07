


# Recoil

## 설치

```
 npm install recoil
```

recoil을 사용하는 컴포넌트는 부모 트리에 <RecoilRoot>로 감싸줘야함

보통 App.js에서 감싼다

## Atom

atom은 상태(state)의 일부를 나타낸다. Atoms는 모든 컴포넌트에서 읽고 쓸 수 있다. atom 의 값을 읽는 모든 컴포넌트는 암묵적으로 atom을 구독한다. 그래서 atom에 변화가 있으면 구독하는 모든 컴포넌트들이 재랜더링 된다.

### useRecoilState()

컴포넌트에서 atom을 읽고 쓰게 해주는 메서드

```
const [text, setText] = useRecoilState();
```

### Selector

derived state(파생된 상태)는 변화된 상태를 말한다. selector()는 주어진 state를 수정하여 return하는 수순 함수 형태를 가지고 있다.

useRecoilValue()를 가지고 selector의 값을 읽을 수 있음

import { screen } from '@testing-library/react';
import React from 'react';

import TextField from '@/components/TextField';
import render from '@/utils/test/render';

it('className prop으로 설정한 css class가 적용된다.', async () => {
  // Arrange - 테스트를 위한 환경 만들기
  // -> className을 지닌 컴포넌트 렌더링 : render API
  // Act - 테스트할 동작 발생
  // -> 렌더링에 대한 검증이기 때문에 이 단계는 생략
  // -> 클릭이나 메서드 호출, prop 변경 등등에 대한 작업이 여기에 해당
  // Assert - 올바른 동작이 실행되었는지 검증
  // -> 렌더링 후 DOM에 해당 class가 존재하는지 검증

  // render API를 호출 -> 테스트환경의 jsDOM에 리액트 컴포넌트가 렌더링된 DOM 구조가 반영
  // jsDOM: Node.js에서 사용하기 위해 많은 웹 표준을 순수 자바스크립트로 구현 -> 대부분의 테스팅 프레임워크는 jsDOM 환경에서 구동하여 검증 진행함
  await render(<TextField className="my-class" />);

  //Assert -> 렌더링된 컴포넌트 요소 조회해야 함
  // -> 테스트 대상이 되는 요소에 접근하기 위해 react 테스팅 라이브러리에 다양한 API 사용
  // React Testing Library 쿼리 타입 -> 사용자가 요소를 탐색하는 방식으로 요소를 줘야함
  // DOM 태그나 클래스가 아닌 화면에 나타나는 고정 텍스트나 label, role과 같은 변하지 않는 속성들을 기반으로 요소를 조회

  //vitest의 expect 함수를 사용하여 기대 결과를 검증

  //className이란 내부 prop이나 state 값을 검증 (X)
  // 렌더링되는 DOM 구조가 올바르게 변경되었는지 확인 (O) -> 최종적으로 사용자가 보는 결과는 DOM
  expect(screen.getByPlacehorderText('텍스트를 입력해 주세요.')).toHaveClass(
    'my-class',
  );
});

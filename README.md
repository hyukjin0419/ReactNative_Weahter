# React-Native miniproject 2.
## ToDoList CRUD
---
전체적인 코드 설명
=> toDo 객체를 toDos객체 안에 이어넣는 식으로 만들다.

=> toDo 객체는 {text, working, checking}으로 이루어져 있다.
  - (String) text는 체크리스트의 내용을 의미 
  - (Boolean) working은 toDo객체가 Work화면에 표시될지 Travel화면에 표시될지 결정하는 변수
  - (Boolean) checking은 toDo객체를 사용자가 Check했는지 Uncheck했는지 확인하는 변수

---
### Flow
#### 1. 기본화면
<img src="https://github.com/hyukjin0419/ReactNative_Weahter/assets/130913514/a5d5d6f1-d925-455a-a73e-6301d4936953" width="300">


#### 2. Work에 체크리스트 추가
<img src="https://github.com/hyukjin0419/ReactNative_Weahter/assets/130913514/8502e398-bc17-4162-b0de-26a286009749" width="300">

#### 3. Travel에 체크리스트 추가
<img src="https://github.com/hyukjin0419/ReactNative_Weahter/assets/130913514/5c4edbd0-5160-4b57-804f-97e19a29d0d9" width="300">

#### 4. 수정하고자 하는 체크리스트를 눌러 모달창을 띄우고 수정
<img src="https://github.com/hyukjin0419/ReactNative_Weahter/assets/130913514/a5d5d6f1-d925-455a-a73e-6301d4936953" width="300">

#### 5. 수정이 적용된 화면. 오른쪽 쓰레기통 아이콘을 누르면 삭제를 위한 Alert창이 뜸
<img src="https://github.com/hyukjin0419/ReactNative_Weahter/assets/130913514/6b042cb8-df9e-4137-9c51-3d3d60dd3d3c" width="300">

#### 6. 삭제가 완료된 후의 모습
<img src="https://github.com/hyukjin0419/ReactNative_Weahter/assets/130913514/a9258be8-67ce-4afc-aaf8-1d3ea7bf57ab" width="300">

#### 7. 전체삭제 기능. 오른쪽 아래 빨간 쓰레기통을 누르면 전체삭제를 위한 Alert창이 뜸. -> 기본화면으로 돌아가며 toDos객체 또한 초기화 됨
<img src="https://github.com/hyukjin0419/ReactNative_Weahter/assets/130913514/764d39b6-a2a5-46c0-b090-11e40080313b" width="300">

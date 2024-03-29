﻿# dongtan-coupang-cfs-schedule

![Sample Screenshot](https://i.ibb.co/kJcHgzQ/2023-06-17-212057.png)

## 소개

동탄 쿠팡 CFS 휴무일 라이브러리입니다.

원하는 날짜에 어떤 그룹들이 휴무인지
간단하게 가져올 수 있습니다.

현재는 브라우저에서만 사용할 수 있으며

휴무일 규칙성을 수식화하여 만들었기 때문에
실제 휴무일과는 다를 수 있습니다.

## 사용 예

다음은 2023년 6월 17일에
휴무인 그룹들을 가져오는 예시입니다.

```js
import dayOff from './dayOff.js';

const index = dayOff.getIndex(new Date("2023-06-17"));

console.log(dayOff.getGroup2D(index)); // ["B", "C"]

console.log(dayOff.getCompletedGroup(index)); // "BC"
```


날짜가 연속적일때는 시작일을 기준으로
index를 사용하면 좋습니다.

```js
import dayOff from './dayOff.js';

const beginIndex = dayOff.getIndex(new Date("2023-06-17"));

for (let i = 0; i < 3; i++) {
    console.log(dayOff.getCompletedGroup(beginIndex + i));
}
// "BC"
// "DE"
// "EF"
```

const healthItems = [
  {
    group: "혈압 / 체질량",
    id: "systolic",
    name: "수축기 혈압",
    unit: "mmHg",
    example: 120,
    desc: "심장이 수축할 때 혈관에 가해지는 압력입니다.",
    normalMin: 90,
    normalMax: 120,
    cautionMax: 139,
    lowMessage: "혈압이 낮은 편입니다. 어지럼이나 피로감이 있다면 확인이 필요합니다.",
    normalMessage: "수축기 혈압이 일반적인 정상 범위에 있습니다.",
    cautionMessage: "수축기 혈압이 약간 높은 편입니다. 염분 섭취와 스트레스 관리가 필요합니다.",
    dangerMessage: "수축기 혈압이 높은 편입니다. 반복적으로 높게 나온다면 의료진 상담이 필요합니다.",
    tip: "짜게 먹는 습관을 줄이고, 규칙적인 유산소 운동과 충분한 수면을 유지하는 것이 좋습니다."
  },
  {
    group: "혈압 / 체질량",
    id: "diastolic",
    name: "이완기 혈압",
    unit: "mmHg",
    example: 80,
    desc: "심장이 이완할 때 혈관에 남아 있는 압력입니다.",
    normalMin: 60,
    normalMax: 80,
    cautionMax: 89,
    lowMessage: "이완기 혈압이 낮은 편입니다. 증상이 있다면 확인이 필요합니다.",
    normalMessage: "이완기 혈압이 일반적인 정상 범위에 있습니다.",
    cautionMessage: "이완기 혈압이 약간 높은 편입니다. 생활습관 관리가 필요합니다.",
    dangerMessage: "이완기 혈압이 높은 편입니다. 지속된다면 의료진 상담이 권장됩니다.",
    tip: "카페인 과다 섭취를 줄이고, 체중 관리와 규칙적인 운동을 실천하는 것이 도움이 됩니다."
  },
  {
    group: "혈압 / 체질량",
    id: "bmi",
    name: "BMI",
    unit: "kg/m²",
    example: 23,
    desc: "키와 몸무게를 바탕으로 계산한 체질량지수입니다.",
    normalMin: 18.5,
    normalMax: 22.9,
    cautionMax: 24.9,
    lowMessage: "BMI가 낮은 편입니다. 영양 상태와 체중 변화를 살펴볼 필요가 있습니다.",
    normalMessage: "BMI가 일반적인 정상 범위에 있습니다.",
    cautionMessage: "BMI가 과체중 범위에 가깝습니다. 식습관과 활동량 관리가 필요합니다.",
    dangerMessage: "BMI가 높은 편입니다. 체중 관리와 생활습관 개선이 권장됩니다.",
    tip: "무리한 다이어트보다는 규칙적인 식사, 근력운동, 걷기 운동을 함께 실천하는 것이 좋습니다."
  },
  {
    group: "혈당 / 지질",
    id: "glucose",
    name: "공복혈당",
    unit: "mg/dL",
    example: 105,
    desc: "공복 상태에서 혈액 속 포도당 농도를 나타냅니다.",
    normalMin: 70,
    normalMax: 99,
    cautionMax: 125,
    lowMessage: "공복혈당이 낮은 편입니다.",
    normalMessage: "공복혈당이 일반적인 정상 범위에 있습니다.",
    cautionMessage: "공복혈당이 정상보다 약간 높은 편입니다. 당 섭취와 식습관 관리가 필요합니다.",
    dangerMessage: "공복혈당이 높은 편입니다. 반복적으로 높다면 의료진 상담이 필요합니다.",
    tip: "단 음료와 야식을 줄이고, 규칙적인 식사와 걷기 운동을 실천하는 것이 좋습니다."
  },
  {
    group: "혈당 / 지질",
    id: "totalCholesterol",
    name: "총콜레스테롤",
    unit: "mg/dL",
    example: 210,
    desc: "혈액 속 전체 콜레스테롤 양을 나타냅니다.",
    normalMin: 0,
    normalMax: 199,
    cautionMax: 239,
    lowMessage: "총콜레스테롤이 낮은 편입니다.",
    normalMessage: "총콜레스테롤이 일반적인 정상 범위에 있습니다.",
    cautionMessage: "총콜레스테롤이 약간 높은 편입니다. 식습관 관리가 필요합니다.",
    dangerMessage: "총콜레스테롤이 높은 편입니다. 심혈관 건강 관리를 위해 상담이 권장됩니다.",
    tip: "튀김, 가공식품, 포화지방 섭취를 줄이고 채소와 생선 섭취를 늘리는 것이 좋습니다."
  },
  {
    group: "혈당 / 지질",
    id: "hdl",
    name: "HDL 콜레스테롤",
    unit: "mg/dL",
    example: 48,
    desc: "혈관 건강에 도움이 되는 좋은 콜레스테롤로 알려져 있습니다.",
    normalMin: 40,
    normalMax: 999,
    cautionMax: 999,
    lowMessage: "HDL 콜레스테롤이 낮은 편입니다.",
    normalMessage: "HDL 콜레스테롤이 적절한 범위에 있습니다.",
    cautionMessage: "HDL 콜레스테롤 수치가 확인되었습니다.",
    dangerMessage: "HDL 콜레스테롤이 낮은 편입니다.",
    tip: "규칙적인 유산소 운동, 금연, 건강한 지방 섭취가 HDL 관리에 도움이 됩니다."
  },
  {
    group: "혈당 / 지질",
    id: "ldl",
    name: "LDL 콜레스테롤",
    unit: "mg/dL",
    example: 135,
    desc: "혈관에 쌓일 수 있어 관리가 필요한 콜레스테롤입니다.",
    normalMin: 0,
    normalMax: 129,
    cautionMax: 159,
    lowMessage: "LDL 콜레스테롤이 낮은 편입니다.",
    normalMessage: "LDL 콜레스테롤이 일반적인 정상 범위에 있습니다.",
    cautionMessage: "LDL 콜레스테롤이 약간 높은 편입니다. 식습관 관리가 필요합니다.",
    dangerMessage: "LDL 콜레스테롤이 높은 편입니다. 심혈관 건강 관리를 위해 상담이 권장됩니다.",
    tip: "포화지방과 트랜스지방 섭취를 줄이고, 식이섬유 섭취를 늘리는 것이 좋습니다."
  },
  {
    group: "혈당 / 지질",
    id: "triglyceride",
    name: "중성지방",
    unit: "mg/dL",
    example: 160,
    desc: "혈액 속 지방 성분 중 하나로, 식습관과 관련이 큽니다.",
    normalMin: 0,
    normalMax: 149,
    cautionMax: 199,
    lowMessage: "중성지방이 낮은 편입니다.",
    normalMessage: "중성지방이 일반적인 정상 범위에 있습니다.",
    cautionMessage: "중성지방이 약간 높은 편입니다. 탄수화물과 음주 관리가 필요합니다.",
    dangerMessage: "중성지방이 높은 편입니다. 생활습관 개선과 상담이 권장됩니다.",
    tip: "술, 단 음식, 과도한 탄수화물 섭취를 줄이는 것이 도움이 됩니다."
  },
  {
    group: "간 기능",
    id: "ast",
    name: "AST",
    unit: "U/L",
    example: 35,
    desc: "간과 근육 손상 여부를 참고할 때 사용되는 효소 수치입니다.",
    normalMin: 0,
    normalMax: 40,
    cautionMax: 60,
    lowMessage: "AST 수치가 낮은 편이나 일반적으로 큰 의미가 없는 경우가 많습니다.",
    normalMessage: "AST 수치가 일반적인 정상 범위에 있습니다.",
    cautionMessage: "AST 수치가 약간 높은 편입니다. 피로, 음주, 약물 복용 등을 함께 살펴볼 필요가 있습니다.",
    dangerMessage: "AST 수치가 높은 편입니다. 간 건강 확인을 위해 의료진 상담이 권장됩니다.",
    tip: "음주를 줄이고 충분한 휴식을 취하는 것이 좋습니다."
  },
  {
    group: "간 기능",
    id: "alt",
    name: "ALT",
    unit: "U/L",
    example: 42,
    desc: "간 기능 상태를 확인할 때 자주 보는 효소 수치입니다.",
    normalMin: 0,
    normalMax: 40,
    cautionMax: 60,
    lowMessage: "ALT 수치가 낮은 편이나 일반적으로 큰 의미가 없는 경우가 많습니다.",
    normalMessage: "ALT 수치가 일반적인 정상 범위에 있습니다.",
    cautionMessage: "ALT 수치가 약간 높은 편입니다. 간 건강 관리가 필요할 수 있습니다.",
    dangerMessage: "ALT 수치가 높은 편입니다. 반복적으로 높다면 의료진 상담이 필요합니다.",
    tip: "음주, 고지방 식사, 과로를 줄이고 체중 관리를 하는 것이 간 건강에 도움이 됩니다."
  }
];

const inputList = document.getElementById("inputList");
const analyzeBtn = document.getElementById("analyzeBtn");
const resetBtn = document.getElementById("resetBtn");
const exampleBtn = document.getElementById("exampleBtn");
const resultSection = document.getElementById("resultSection");
const resultList = document.getElementById("resultList");
const summaryBox = document.getElementById("summaryBox");
const backToInputBtn = document.getElementById("backToInputBtn");
const goTopBtn = document.getElementById("goTopBtn");

function createInputCards() {
  let currentGroup = "";

  healthItems.forEach(item => {
    if (item.group !== currentGroup) {
      currentGroup = item.group;

      const groupTitle = document.createElement("div");
      groupTitle.className = "group-title";
      groupTitle.textContent = currentGroup;
      inputList.appendChild(groupTitle);
    }

    const card = document.createElement("div");
    card.className = "input-card";

    card.innerHTML = `
      <div class="input-top">
        <span class="input-title">${item.name}</span>
        <span class="unit">${item.unit}</span>
      </div>
      <input type="number" id="${item.id}" placeholder="예: ${item.example}" />
      <p class="input-desc">${item.desc}</p>
    `;

    inputList.appendChild(card);
  });
}

function analyzeValue(item, value) {
  if (value < item.normalMin) {
    return {
      status: "낮음",
      className: "danger",
      message: item.lowMessage
    };
  }

  if (value >= item.normalMin && value <= item.normalMax) {
    return {
      status: "정상",
      className: "normal",
      message: item.normalMessage
    };
  }

  if (value > item.normalMax && value <= item.cautionMax) {
    return {
      status: "주의",
      className: "caution",
      message: item.cautionMessage
    };
  }

  return {
    status: "높음",
    className: "danger",
    message: item.dangerMessage
  };
}

function showResults() {
  resultList.innerHTML = "";

  let enteredCount = 0;
  let normalCount = 0;
  let cautionCount = 0;
  let dangerCount = 0;

  healthItems.forEach(item => {
    const input = document.getElementById(item.id);
    const value = Number(input.value);

    if (input.value === "") {
      return;
    }

    enteredCount++;

    const result = analyzeValue(item, value);

    if (result.status === "정상") {
      normalCount++;
    } else if (result.status === "주의") {
      cautionCount++;
    } else {
      dangerCount++;
    }

    const resultCard = document.createElement("div");
    resultCard.className = `result-card ${result.className}`;

    resultCard.innerHTML = `
      <h3>${item.name}</h3>
      <div class="result-value">입력값: ${value} ${item.unit}</div>
      <div class="status">${result.status}</div>
      <p class="result-text">${result.message}</p>
      <p class="tip-text"><strong>관리 팁:</strong> ${item.tip}</p>
    `;

    resultList.appendChild(resultCard);
  });

  if (enteredCount === 0) {
    summaryBox.innerHTML = `
      아직 입력된 건강검진 수치가 없습니다.<br>
      검진 결과표에서 혈압, 혈당, 콜레스테롤, 간 기능 수치 중 하나 이상을 입력해 주세요.<br>
      수치가 없다면 <strong>예시 수치 입력</strong> 버튼으로 앱 작동 방식을 먼저 확인할 수 있습니다.
    `;
    resultSection.style.display = "block";
    resultSection.scrollIntoView({ behavior: "smooth" });
    return;
  }

  summaryBox.innerHTML = `
    총 <strong>${enteredCount}개</strong> 항목을 확인했습니다.
    <div class="summary-counts">
      <div class="summary-item">
        <span class="summary-number">${normalCount}</span>
        정상
      </div>
      <div class="summary-item">
        <span class="summary-number">${cautionCount}</span>
        주의
      </div>
      <div class="summary-item">
        <span class="summary-number">${dangerCount}</span>
        높음/낮음
      </div>
    </div>
    <br>
    이 결과는 건강검진 수치를 이해하기 위한 참고 정보입니다.
    실제 진단, 치료, 약물 조정은 의료진 상담을 통해 결정해야 합니다.
  `;

  resultSection.style.display = "block";
  resultSection.scrollIntoView({ behavior: "smooth" });
}

function fillExampleValues() {
  healthItems.forEach(item => {
    document.getElementById(item.id).value = item.example;
  });
}

function resetInputs() {
  healthItems.forEach(item => {
    document.getElementById(item.id).value = "";
  });

  resultList.innerHTML = "";
  summaryBox.innerHTML = "";
  resultSection.style.display = "none";
}

function backToInput() {
  document.querySelector(".input-section").scrollIntoView({ behavior: "smooth" });
}

function goTop() {
  document.getElementById("top").scrollIntoView({ behavior: "smooth" });
}

createInputCards();

analyzeBtn.addEventListener("click", showResults);
resetBtn.addEventListener("click", resetInputs);
exampleBtn.addEventListener("click", fillExampleValues);
backToInputBtn.addEventListener("click", backToInput);
goTopBtn.addEventListener("click", goTop);

const inputBoxEl = document.querySelector(".image-content__label");
inputBoxEl.addEventListener("change", function (event) {
    PreviewImage(event);
});

function PreviewImage(e) {
    const filesInfo = e.target.files;
    const fileList = [...filesInfo];
    const previewZone = document.querySelector(".image-content__preview");

    if (filesInfo.length > 4) {
        alert("사진은 4장까지 올릴 수 있습니다.");
        return;
    }

    fileList.map((file, idx) => {
        const reader = new FileReader();
        reader.addEventListener("load", function (e) {
            const img = MakeImg(e);
            const imgDiv = MakeImgDiv(img);
            const div = MakeDiv(imgDiv);
            previewZone.appendChild(div);
        });
        reader.readAsDataURL(file);
    });
    HiddenDropZone();
    ShowCompleteBox();
}

function MakeImg(e) {
    const img = document.createElement("img");
    img.classList.add("imgStyle");
    img.src = e.target.result;
    return getEXIFData(img);
}

function MakeImgDiv(img) {
    const div = document.createElement("div");
    div.classList.add("imgDivStyle");
    div.appendChild(img);
    return div;
}

function MakeInput(idx) {
    const input = document.createElement("input");
    input.setAttribute("list", `address`);
    input.name = `image-content__image${idx + 1}`;
    input.id = `image-content__image${idx + 1}`;
    input.classList.add("inputStyle");
    return input;
}

function ShowCompleteBox() {
    const completeBox = document.querySelector(".image-content__completeBox");
    completeBox.style.display = "block";
}

function HiddenDropZone() {
    const dropZone = document.querySelector(".image-content__label");
    dropZone.style.display = "none";
}

function getEXIFData(img) {
    img.addEventListener("load", function () {
        EXIF.getData(this, function () {
            const allMetaData = EXIF.getAllTags(this);
            const GPSLongitude = EXIF.getTag(this, "GPSLongitude");
            console.log(allMetaData, GPSLongitude);
        });
    });
    return img;
}

const dummyAddress = [
    {
        wideAddr: "서울특별시",
        localAddr: "종로구",
    },
    {
        wideAddr: "서울특별시",
        localAddr: "중구",
    },
    {
        wideAddr: "서울특별시",
        localAddr: "용산구",
    },
    {
        wideAddr: "서울특별시",
        localAddr: "성동구",
    },
    {
        wideAddr: "서울특별시",
        localAddr: "광진구",
    },
    {
        wideAddr: "서울특별시",
        localAddr: "동대문구",
    },
    {
        wideAddr: "서울특별시",
        localAddr: "중랑구",
    },
    {
        wideAddr: "서울특별시",
        localAddr: "성북구",
    },
    {
        wideAddr: "서울특별시",
        localAddr: "강북구",
    },
    {
        wideAddr: "서울특별시",
        localAddr: "도봉구",
    },
    {
        wideAddr: "서울특별시",
        localAddr: "노원구",
    },
    {
        wideAddr: "서울특별시",
        localAddr: "은평구",
    },
    {
        wideAddr: "서울특별시",
        localAddr: "서대문구",
    },
    {
        wideAddr: "서울특별시",
        localAddr: "마포구",
    },
    {
        wideAddr: "서울특별시",
        localAddr: "양천구",
    },
    {
        wideAddr: "서울특별시",
        localAddr: "강서구",
    },
    {
        wideAddr: "서울특별시",
        localAddr: "구로구",
    },
    {
        wideAddr: "서울특별시",
        localAddr: "금천구",
    },
    {
        wideAddr: "서울특별시",
        localAddr: "영등포구",
    },
    {
        wideAddr: "서울특별시",
        localAddr: "동작구",
    },
    {
        wideAddr: "서울특별시",
        localAddr: "관악구",
    },
    {
        wideAddr: "서울특별시",
        localAddr: "서초구",
    },
    {
        wideAddr: "서울특별시",
        localAddr: "강남구",
    },
    {
        wideAddr: "서울특별시",
        localAddr: "송파구",
    },
    {
        wideAddr: "서울특별시",
        localAddr: "강동구",
    },
    {
        wideAddr: "부산광역시",
        localAddr: "중구",
    },
    {
        wideAddr: "부산광역시",
        localAddr: "서구",
    },
    {
        wideAddr: "부산광역시",
        localAddr: "동구",
    },
    {
        wideAddr: "부산광역시",
        localAddr: "영도구",
    },
    {
        wideAddr: "부산광역시",
        localAddr: "부산진구",
    },
    {
        wideAddr: "부산광역시",
        localAddr: "동래구",
    },
    {
        wideAddr: "부산광역시",
        localAddr: "남구",
    },
    {
        wideAddr: "부산광역시",
        localAddr: "북구",
    },
    {
        wideAddr: "부산광역시",
        localAddr: "해운대구",
    },
    {
        wideAddr: "부산광역시",
        localAddr: "사하구",
    },
    {
        wideAddr: "부산광역시",
        localAddr: "금정구",
    },
    {
        wideAddr: "부산광역시",
        localAddr: "강서구",
    },
    {
        wideAddr: "부산광역시",
        localAddr: "연제구",
    },
    {
        wideAddr: "부산광역시",
        localAddr: "수영구",
    },
    {
        wideAddr: "부산광역시",
        localAddr: "사상구",
    },
    {
        wideAddr: "부산광역시",
        localAddr: "기장군",
    },
    {
        wideAddr: "대구광역시",
        localAddr: "중구",
    },
    {
        wideAddr: "대구광역시",
        localAddr: "동구",
    },
    {
        wideAddr: "대구광역시",
        localAddr: "서구",
    },
    {
        wideAddr: "대구광역시",
        localAddr: "남구",
    },
    {
        wideAddr: "대구광역시",
        localAddr: "북구",
    },
    {
        wideAddr: "대구광역시",
        localAddr: "수성구",
    },
    {
        wideAddr: "대구광역시",
        localAddr: "달서구",
    },
    {
        wideAddr: "대구광역시",
        localAddr: "달성군",
    },
    {
        wideAddr: "인천광역시",
        localAddr: "중구",
    },
    {
        wideAddr: "인천광역시",
        localAddr: "동구",
    },
    {
        wideAddr: "인천광역시",
        localAddr: "미추홀구",
    },
    {
        wideAddr: "인천광역시",
        localAddr: "연수구",
    },
    {
        wideAddr: "인천광역시",
        localAddr: "남동구",
    },
    {
        wideAddr: "인천광역시",
        localAddr: "부평구",
    },
    {
        wideAddr: "인천광역시",
        localAddr: "계양구",
    },
    {
        wideAddr: "인천광역시",
        localAddr: "서구",
    },
    {
        wideAddr: "인천광역시",
        localAddr: "강화군",
    },
    {
        wideAddr: "인천광역시",
        localAddr: "옹진군",
    },
    {
        wideAddr: "광주광역시",
        localAddr: "동구",
    },
    {
        wideAddr: "광주광역시",
        localAddr: "서구",
    },
    {
        wideAddr: "광주광역시",
        localAddr: "남구",
    },
    {
        wideAddr: "광주광역시",
        localAddr: "북구",
    },
    {
        wideAddr: "광주광역시",
        localAddr: "광산구",
    },
    {
        wideAddr: "대전광역시",
        localAddr: "동구",
    },
    {
        wideAddr: "대전광역시",
        localAddr: "중구",
    },
    {
        wideAddr: "대전광역시",
        localAddr: "서구",
    },
    {
        wideAddr: "대전광역시",
        localAddr: "유성구",
    },
    {
        wideAddr: "대전광역시",
        localAddr: "대덕구",
    },
    {
        wideAddr: "울산광역시",
        localAddr: "중구",
    },
    {
        wideAddr: "울산광역시",
        localAddr: "남구",
    },
    {
        wideAddr: "울산광역시",
        localAddr: "동구",
    },
    {
        wideAddr: "울산광역시",
        localAddr: "북구",
    },
    {
        wideAddr: "울산광역시",
        localAddr: "울주군",
    },
    {
        wideAddr: "세종특별자치시",
        localAddr: "세종특별자치시",
    },
    {
        wideAddr: "경기도",
        localAddr: "수원시",
    },
    {
        wideAddr: "경기도",
        localAddr: "성남시",
    },
    {
        wideAddr: "경기도",
        localAddr: "고양시",
    },
    {
        wideAddr: "경기도",
        localAddr: "용인시",
    },
    {
        wideAddr: "경기도",
        localAddr: "부천시",
    },
    {
        wideAddr: "경기도",
        localAddr: "안산시",
    },
    {
        wideAddr: "경기도",
        localAddr: "안양시",
    },
    {
        wideAddr: "경기도",
        localAddr: "남양주시",
    },
    {
        wideAddr: "경기도",
        localAddr: "화성시",
    },
    {
        wideAddr: "경기도",
        localAddr: "평택시",
    },
    {
        wideAddr: "경기도",
        localAddr: "의정부시",
    },
    {
        wideAddr: "경기도",
        localAddr: "시흥시",
    },
    {
        wideAddr: "경기도",
        localAddr: "파주시",
    },
    {
        wideAddr: "경기도",
        localAddr: "광명시",
    },
    {
        wideAddr: "경기도",
        localAddr: "김포시",
    },
    {
        wideAddr: "경기도",
        localAddr: "군포시",
    },
    {
        wideAddr: "경기도",
        localAddr: "광주시",
    },
    {
        wideAddr: "경기도",
        localAddr: "이천시",
    },
    {
        wideAddr: "경기도",
        localAddr: "양주시",
    },
    {
        wideAddr: "경기도",
        localAddr: "오산시",
    },
    {
        wideAddr: "경기도",
        localAddr: "구리시",
    },
    {
        wideAddr: "경기도",
        localAddr: "안성시",
    },
    {
        wideAddr: "경기도",
        localAddr: "포천시",
    },
    {
        wideAddr: "경기도",
        localAddr: "의왕시",
    },
    {
        wideAddr: "경기도",
        localAddr: "하남시",
    },
    {
        wideAddr: "경기도",
        localAddr: "여주시",
    },
    {
        wideAddr: "경기도",
        localAddr: "양평군",
    },
    {
        wideAddr: "경기도",
        localAddr: "동두천시",
    },
    {
        wideAddr: "경기도",
        localAddr: "과천시",
    },
    {
        wideAddr: "경기도",
        localAddr: "가평군",
    },
    {
        wideAddr: "경기도",
        localAddr: "연천군",
    },
    {
        wideAddr: "강원도",
        localAddr: "춘천시",
    },
    {
        wideAddr: "강원도",
        localAddr: "원주시",
    },
    {
        wideAddr: "강원도",
        localAddr: "강릉시",
    },
    {
        wideAddr: "강원도",
        localAddr: "동해시",
    },
    {
        wideAddr: "강원도",
        localAddr: "태백시",
    },
    {
        wideAddr: "강원도",
        localAddr: "속초시",
    },
    {
        wideAddr: "강원도",
        localAddr: "삼척시",
    },
    {
        wideAddr: "강원도",
        localAddr: "홍천군",
    },
    {
        wideAddr: "강원도",
        localAddr: "횡성군",
    },
    {
        wideAddr: "강원도",
        localAddr: "영월군",
    },
    {
        wideAddr: "강원도",
        localAddr: "평창군",
    },
    {
        wideAddr: "강원도",
        localAddr: "정선군",
    },
    {
        wideAddr: "강원도",
        localAddr: "철원군",
    },
    {
        wideAddr: "강원도",
        localAddr: "화천군",
    },
    {
        wideAddr: "강원도",
        localAddr: "양구군",
    },
    {
        wideAddr: "강원도",
        localAddr: "인제군",
    },
    {
        wideAddr: "강원도",
        localAddr: "고성군",
    },
    {
        wideAddr: "강원도",
        localAddr: "양양군",
    },
    {
        wideAddr: "충청북도",
        localAddr: "청주시",
    },
    {
        wideAddr: "충청북도",
        localAddr: "충주시",
    },
    {
        wideAddr: "충청북도",
        localAddr: "제천시",
    },
    {
        wideAddr: "충청북도",
        localAddr: "보은군",
    },
    {
        wideAddr: "충청북도",
        localAddr: "옥천군",
    },
    {
        wideAddr: "충청북도",
        localAddr: "영동군",
    },
    {
        wideAddr: "충청북도",
        localAddr: "진천군",
    },
    {
        wideAddr: "충청북도",
        localAddr: "괴산군",
    },
    {
        wideAddr: "충청북도",
        localAddr: "음성군",
    },
    {
        wideAddr: "충청북도",
        localAddr: "단양군",
    },
    {
        wideAddr: "충청북도",
        localAddr: "증평군",
    },
    {
        wideAddr: "충청남도",
        localAddr: "천안시",
    },
    {
        wideAddr: "충청남도",
        localAddr: "공주시",
    },
    {
        wideAddr: "충청남도",
        localAddr: "보령시",
    },
    {
        wideAddr: "충청남도",
        localAddr: "아산시",
    },
    {
        wideAddr: "충청남도",
        localAddr: "서산시",
    },
    {
        wideAddr: "충청남도",
        localAddr: "논산시",
    },
    {
        wideAddr: "충청남도",
        localAddr: "계룡시",
    },
    {
        wideAddr: "충청남도",
        localAddr: "당진시",
    },
    {
        wideAddr: "충청남도",
        localAddr: "금산군",
    },
    {
        wideAddr: "충청남도",
        localAddr: "부여군",
    },
    {
        wideAddr: "충청남도",
        localAddr: "서천군",
    },
    {
        wideAddr: "충청남도",
        localAddr: "청양군",
    },
    {
        wideAddr: "충청남도",
        localAddr: "홍성군",
    },
    {
        wideAddr: "충청남도",
        localAddr: "예산군",
    },
    {
        wideAddr: "충청남도",
        localAddr: "태안군",
    },
    {
        wideAddr: "전라북도",
        localAddr: "전주시",
    },
    {
        wideAddr: "전라북도",
        localAddr: "군산시",
    },
    {
        wideAddr: "전라북도",
        localAddr: "익산시",
    },
    {
        wideAddr: "전라북도",
        localAddr: "정읍시",
    },
    {
        wideAddr: "전라북도",
        localAddr: "남원시",
    },
    {
        wideAddr: "전라북도",
        localAddr: "김제시",
    },
    {
        wideAddr: "전라북도",
        localAddr: "완주군",
    },
    {
        wideAddr: "전라북도",
        localAddr: "진안군",
    },
    {
        wideAddr: "전라북도",
        localAddr: "무주군",
    },
    {
        wideAddr: "전라북도",
        localAddr: "장수군",
    },
    {
        wideAddr: "전라북도",
        localAddr: "임실군",
    },
    {
        wideAddr: "전라북도",
        localAddr: "순창군",
    },
    {
        wideAddr: "전라북도",
        localAddr: "고창군",
    },
    {
        wideAddr: "전라북도",
        localAddr: "부안군",
    },
    {
        wideAddr: "전라남도",
        localAddr: "목포시",
    },
    {
        wideAddr: "전라남도",
        localAddr: "여수시",
    },
    {
        wideAddr: "전라남도",
        localAddr: "순천시",
    },
    {
        wideAddr: "전라남도",
        localAddr: "나주시",
    },
    {
        wideAddr: "전라남도",
        localAddr: "광양시",
    },
    {
        wideAddr: "전라남도",
        localAddr: "담양군",
    },
    {
        wideAddr: "전라남도",
        localAddr: "곡성군",
    },
    {
        wideAddr: "전라남도",
        localAddr: "구례군",
    },
    {
        wideAddr: "전라남도",
        localAddr: "고흥군",
    },
    {
        wideAddr: "전라남도",
        localAddr: "보성군",
    },
    {
        wideAddr: "전라남도",
        localAddr: "화순군",
    },
    {
        wideAddr: "전라남도",
        localAddr: "장흥군",
    },
    {
        wideAddr: "전라남도",
        localAddr: "강진군",
    },
    {
        wideAddr: "전라남도",
        localAddr: "해남군",
    },
    {
        wideAddr: "전라남도",
        localAddr: "영암군",
    },
    {
        wideAddr: "전라남도",
        localAddr: "무안군",
    },
    {
        wideAddr: "전라남도",
        localAddr: "함평군",
    },
    {
        wideAddr: "전라남도",
        localAddr: "영광군",
    },
    {
        wideAddr: "전라남도",
        localAddr: "장성군",
    },
    {
        wideAddr: "전라남도",
        localAddr: "완도군",
    },
    {
        wideAddr: "전라남도",
        localAddr: "진도군",
    },
    {
        wideAddr: "전라남도",
        localAddr: "신안군",
    },
    {
        wideAddr: "경상북도",
        localAddr: "포항시",
    },
    {
        wideAddr: "경상북도",
        localAddr: "경주시",
    },
    {
        wideAddr: "경상북도",
        localAddr: "김천시",
    },
    {
        wideAddr: "경상북도",
        localAddr: "안동시",
    },
    {
        wideAddr: "경상북도",
        localAddr: "구미시",
    },
    {
        wideAddr: "경상북도",
        localAddr: "영주시",
    },
    {
        wideAddr: "경상북도",
        localAddr: "영천시",
    },
    {
        wideAddr: "경상북도",
        localAddr: "상주시",
    },
    {
        wideAddr: "경상북도",
        localAddr: "문경시",
    },
    {
        wideAddr: "경상북도",
        localAddr: "경산시",
    },
    {
        wideAddr: "경상북도",
        localAddr: "군위군",
    },
    {
        wideAddr: "경상북도",
        localAddr: "의성군",
    },
    {
        wideAddr: "경상북도",
        localAddr: "청송군",
    },
    {
        wideAddr: "경상북도",
        localAddr: "영양군",
    },
    {
        wideAddr: "경상북도",
        localAddr: "영덕군",
    },
    {
        wideAddr: "경상북도",
        localAddr: "청도군",
    },
    {
        wideAddr: "경상북도",
        localAddr: "고령군",
    },
    {
        wideAddr: "경상북도",
        localAddr: "성주군",
    },
    {
        wideAddr: "경상북도",
        localAddr: "칠곡군",
    },
    {
        wideAddr: "경상북도",
        localAddr: "예천군",
    },
    {
        wideAddr: "경상북도",
        localAddr: "봉화군",
    },
    {
        wideAddr: "경상북도",
        localAddr: "울진군",
    },
    {
        wideAddr: "경상북도",
        localAddr: "울릉군",
    },
    {
        wideAddr: "경상남도",
        localAddr: "창원시",
    },
    {
        wideAddr: "경상남도",
        localAddr: "진주시",
    },
    {
        wideAddr: "경상남도",
        localAddr: "통영시",
    },
    {
        wideAddr: "경상남도",
        localAddr: "사천시",
    },
    {
        wideAddr: "경상남도",
        localAddr: "김해시",
    },
    {
        wideAddr: "경상남도",
        localAddr: "밀양시",
    },
    {
        wideAddr: "경상남도",
        localAddr: "거제시",
    },
    {
        wideAddr: "경상남도",
        localAddr: "양산시",
    },
    {
        wideAddr: "경상남도",
        localAddr: "의령군",
    },
    {
        wideAddr: "경상남도",
        localAddr: "함안군",
    },
    {
        wideAddr: "경상남도",
        localAddr: "창녕군",
    },
    {
        wideAddr: "경상남도",
        localAddr: "고성군",
    },
    {
        wideAddr: "경상남도",
        localAddr: "남해군",
    },
    {
        wideAddr: "경상남도",
        localAddr: "하동군",
    },
    {
        wideAddr: "경상남도",
        localAddr: "산청군",
    },
    {
        wideAddr: "경상남도",
        localAddr: "함양군",
    },
    {
        wideAddr: "경상남도",
        localAddr: "거창군",
    },
    {
        wideAddr: "경상남도",
        localAddr: "합천군",
    },
    {
        wideAddr: "제주특별자치도",
        localAddr: "제주시",
    },
    {
        wideAddr: "제주특별자치도",
        localAddr: "서귀포시",
    },
];

function fillDataListOption() {
    const dataList = document.querySelector("#address");
    const optionFragment = document.createDocumentFragment();
    dummyAddress.map((item) => {
        const option = document.createElement("option");
        option.value = item.join(" ");
        optionFragment.appendChild(option);
    });
    dataList.appendChild(optionFragment);
}

fillDataListOption();

function MakeDiv(imgDiv) {
    const div = document.createElement("div");
    div.classList.add("divStyle");
    div.appendChild(imgDiv);
    return div;
}

// ===== Data Structures =====

// Station Data
const stations = [
    { id: 'nangang', name: '南港', nameEn: 'Nangang', region: 'north' },
    { id: 'taipei', name: '台北', nameEn: 'Taipei', region: 'north' },
    { id: 'banqiao', name: '板橋', nameEn: 'Banqiao', region: 'north' },
    { id: 'taoyuan', name: '桃園', nameEn: 'Taoyuan', region: 'north' },
    { id: 'hsinchu', name: '新竹', nameEn: 'Hsinchu', region: 'north' },
    { id: 'miaoli', name: '苗栗', nameEn: 'Miaoli', region: 'central' },
    { id: 'taichung', name: '台中', nameEn: 'Taichung', region: 'central' },
    { id: 'changhua', name: '彰化', nameEn: 'Changhua', region: 'central' },
    { id: 'yunlin', name: '雲林', nameEn: 'Yunlin', region: 'central' },
    { id: 'chiayi', name: '嘉義', nameEn: 'Chiayi', region: 'south' },
    { id: 'tainan', name: '台南', nameEn: 'Tainan', region: 'south' },
    { id: 'zuoying', name: '左營', nameEn: 'Zuoying', region: 'south' }
];

// Station Details
const stationDetails = {
    nangang: {
        name: '南港站',
        address: '台北市南港區南港路一段313號',
        phone: '(02) 2785-5599',
        facilities: ['無障礙設施', '哺乳室', '商店街', 'Wi-Fi', '停車場'],
        transit: ['台北捷運板南線', '台鐵縱貫線'],
        description: '南港站為台灣高鐵最北端車站，與台北捷運及台鐵共構，提供便利的轉乘服務。'
    },
    taipei: {
        name: '台北站',
        address: '台北市中正區北平西路3號',
        phone: '(02) 2371-8888',
        facilities: ['無障礙設施', '哺乳室', '商店街', '美食街', 'Wi-Fi', '停車場', '寄物櫃'],
        transit: ['台北捷運板南線', '台北捷運淡水信義線', '台鐵縱貫線', '桃園機場捷運'],
        description: '台北站是台灣最重要的交通樞紐，連結高鐵、台鐵、捷運及機場捷運，提供最便利的轉乘服務。'
    },
    banqiao: {
        name: '板橋站',
        address: '新北市板橋區縣民大道二段7號',
        phone: '(02) 2964-2666',
        facilities: ['無障礙設施', '哺乳室', '商店街', '美食街', 'Wi-Fi', '停車場'],
        transit: ['台北捷運板南線', '台鐵縱貫線'],
        description: '板橋站位於新北市板橋區，為新北市的主要高鐵站，與捷運及台鐵共構。'
    },
    taoyuan: {
        name: '桃園站',
        address: '桃園市中壢區高鐵北路一段6號',
        phone: '(03) 261-4598',
        facilities: ['無障礙設施', '哺乳室', '商店街', 'Wi-Fi', '停車場', '租車服務'],
        transit: ['桃園機場捷運', '台鐵縱貫線', '桃園捷運(規劃中)'],
        description: '桃園站鄰近桃園國際機場，提供機場捷運轉乘，是國際旅客的重要門戶。'
    },
    hsinchu: {
        name: '新竹站',
        address: '新竹縣竹北市高鐵七路6號',
        phone: '(03) 657-6666',
        facilities: ['無障礙設施', '哺乳室', '商店街', 'Wi-Fi', '停車場'],
        transit: ['台鐵六家線', '新竹輕軌(規劃中)'],
        description: '新竹站位於竹北市，服務新竹科學園區及新竹地區，是科技產業的重要交通樞紐。'
    },
    miaoli: {
        name: '苗栗站',
        address: '苗栗縣後龍鎮高鐵三路268號',
        phone: '(037) 558-599',
        facilities: ['無障礙設施', '哺乳室', 'Wi-Fi', '停車場'],
        transit: ['接駁公車'],
        description: '苗栗站位於後龍鎮，提供苗栗地區便捷的高鐵服務。'
    },
    taichung: {
        name: '台中站',
        address: '台中市烏日區站區二路8號',
        phone: '(04) 3601-8888',
        facilities: ['無障礙設施', '哺乳室', '商店街', '美食街', 'Wi-Fi', '停車場', '租車服務'],
        transit: ['台鐵縱貫線', '台中捷運綠線'],
        description: '台中站是中台灣最重要的交通樞紐，與台鐵及捷運共構，提供中部地區完善的交通服務。'
    },
    changhua: {
        name: '彰化站',
        address: '彰化縣田中鎮站區路二段99號',
        phone: '(04) 874-3890',
        facilities: ['無障礙設施', '哺乳室', 'Wi-Fi', '停車場'],
        transit: ['台鐵縱貫線', '接駁公車'],
        description: '彰化站位於田中鎮，服務彰化及雲林北部地區。'
    },
    yunlin: {
        name: '雲林站',
        address: '雲林縣虎尾鎮站前東路301號',
        phone: '(05) 636-3080',
        facilities: ['無障礙設施', '哺乳室', 'Wi-Fi', '停車場'],
        transit: ['接駁公車'],
        description: '雲林站位於虎尾鎮，為雲林地區提供高鐵服務。'
    },
    chiayi: {
        name: '嘉義站',
        address: '嘉義縣太保市高鐵西路168號',
        phone: '(05) 362-9988',
        facilities: ['無障礙設施', '哺乳室', '商店街', 'Wi-Fi', '停車場'],
        transit: ['台鐵縱貫線', '阿里山森林鐵路(未來連結)'],
        description: '嘉義站位於太保市，鄰近故宮南院，是前往阿里山的重要轉運站。'
    },
    tainan: {
        name: '台南站',
        address: '台南市歸仁區歸仁大道100號',
        phone: '(06) 600-0800',
        facilities: ['無障礙設施', '哺乳室', '商店街', 'Wi-Fi', '停車場', '租車服務'],
        transit: ['台鐵沙崙線', '台南捷運(規劃中)'],
        description: '台南站位於歸仁區沙崙，連結台鐵沙崙線，服務台南市及周邊地區。'
    },
    zuoying: {
        name: '左營站',
        address: '高雄市左營區高鐵路105號',
        phone: '(07) 960-5000',
        facilities: ['無障礙設施', '哺乳室', '商店街', '美食街', 'Wi-Fi', '停車場', '租車服務'],
        transit: ['高雄捷運紅線', '台鐵縱貫線'],
        description: '左營站是台灣高鐵最南端車站，與台鐵及高雄捷運共構，是南台灣最重要的交通樞紐。'
    }
};

// Timetable Data - Generated Dynamically
let timetableSouthbound = [];
let timetableNorthbound = [];

function generateTimetable() {
    timetableSouthbound = [];
    timetableNorthbound = [];

    // Station time offsets (minutes from start) - Approximate
    const offsetsSouth = {
        nangang: 0, taipei: 10, banqiao: 20, taoyuan: 35, hsinchu: 50, miaoli: 70,
        taichung: 95, changhua: 110, yunlin: 125, chiayi: 140, tainan: 165, zuoying: 180
    };

    // Reverse offsets for Northbound (approximate reciprocal)
    const offsetsNorth = {
        zuoying: 0, tainan: 15, chiayi: 40, yunlin: 55, changhua: 70,
        taichung: 85, miaoli: 110, hsinchu: 130, taoyuan: 145, banqiao: 160, taipei: 170, nangang: 180
    };

    const trainTypes = [
        { id: 'express', name: '直達車', stops: ['nangang', 'taipei', 'banqiao', 'taichung', 'zuoying'], startHour: 6, endHour: 23 },
        { id: 'semi-express', name: '跳蛙式', stops: ['nangang', 'taipei', 'banqiao', 'taoyuan', 'hsinchu', 'taichung', 'chiayi', 'tainan', 'zuoying'], startHour: 6, endHour: 22 },
        { id: 'local', name: '各站停靠', stops: ['nangang', 'taipei', 'banqiao', 'taoyuan', 'hsinchu', 'miaoli', 'taichung', 'changhua', 'yunlin', 'chiayi', 'tainan', 'zuoying'], startHour: 6, endHour: 23 }
    ];

    function createTrain(type, direction, baseMinute) {
        // Random jitter: -5 to +10 minutes
        const jitter = Math.floor(Math.random() * 16) - 5;
        let startMin = baseMinute + jitter;

        // Ensure within valid bounds (not too early/late for the hour logic, though generic clamping is fine)
        // Adjust stops times
        const stops = direction === 'south' ? type.stops : [...type.stops].reverse();
        const offsets = direction === 'south' ? offsetsSouth : offsetsNorth;

        const times = stops.map(stop => {
            const offset = offsets[stop];
            const timeMin = startMin + offset;
            const h = Math.floor(timeMin / 60) % 24;
            const m = timeMin % 60;
            return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
        });

        // Train Numbering Logic
        // South: Odd, North: Even
        // 1xx (Express), 6xx (Semi), 8xx (Local)
        let number;
        if (type.id === 'express') {
            number = direction === 'south' ? southExpress : northExpress;
            if (direction === 'south') southExpress += 2; else northExpress += 2;
        } else if (type.id === 'semi-express') {
            number = direction === 'south' ? southSemi : northSemi;
            if (direction === 'south') southSemi += 2; else northSemi += 2;
        } else {
            number = direction === 'south' ? southLocal : northLocal;
            if (direction === 'south') southLocal += 2; else northLocal += 2;
        }

        const trainNo = number.toString().padStart(4, '0');

        // Non-Reserved Seat Logic
        let freeSeats = '10-12車';
        const rand = Math.random();
        if (type.id === 'express') {
            freeSeats = '10-12車';
        } else if (type.id === 'semi-express') {
            // 80% 10-12, 20% 9-12
            freeSeats = rand > 0.8 ? '9-12車' : '10-12車';
        } else {
            // Local: 60% 10-12, 20% 9-12, 20% 8-12
            if (rand > 0.8) freeSeats = '8-12車';
            else if (rand > 0.6) freeSeats = '9-12車';
            else freeSeats = '10-12車';
        }

        return {
            trainNo,
            type: type.id,
            typeName: type.name,
            stops,
            times,
            nonReserved: freeSeats
        };
    }

    // Generate Southbound
    let southExpress = 101, southSemi = 601, southLocal = 801;
    for (let h = 6; h <= 23; h++) {
        const base = h * 60;
        // Express: ~2 per hour
        if (h % 1 === 0) timetableSouthbound.push(createTrain(trainTypes[0], 'south', base + 0));
        if (h >= 7 && h <= 21) timetableSouthbound.push(createTrain(trainTypes[0], 'south', base + 30));

        // Semi: ~1 per hour
        if (h >= 7 && h <= 21) timetableSouthbound.push(createTrain(trainTypes[1], 'south', base + 15));

        // Local: ~2 per hour
        timetableSouthbound.push(createTrain(trainTypes[2], 'south', base + 20));
        if (h <= 22) timetableSouthbound.push(createTrain(trainTypes[2], 'south', base + 50));
    }

    // Generate Northbound
    let northExpress = 102, northSemi = 602, northLocal = 802;
    for (let h = 6; h <= 23; h++) {
        const base = h * 60;
        if (h % 1 === 0) timetableNorthbound.push(createTrain(trainTypes[0], 'north', base + 0));
        if (h >= 7 && h <= 21) timetableNorthbound.push(createTrain(trainTypes[0], 'north', base + 30));
        if (h >= 7 && h <= 21) timetableNorthbound.push(createTrain(trainTypes[1], 'north', base + 15));
        timetableNorthbound.push(createTrain(trainTypes[2], 'north', base + 20));
        if (h <= 22) timetableNorthbound.push(createTrain(trainTypes[2], 'north', base + 50));
    }
}

// Timetable Persistence
function loadOrGenerateTimetable() {
    const today = new Date().toISOString().split('T')[0];
    const storageKey = `thsr_schedule_${today}`;
    const saved = localStorage.getItem(storageKey);

    if (saved) {
        const data = JSON.parse(saved);
        timetableSouthbound = data.south;
        timetableNorthbound = data.north;
    } else {
        generateTimetable();
        localStorage.setItem(storageKey, JSON.stringify({
            south: timetableSouthbound,
            north: timetableNorthbound
        }));
    }
}

// Generate immediately (load or create)
loadOrGenerateTimetable();

// Fare calculation (基礎票價參考，單位：新台幣)
const baseFares = {
    'nangang-taipei': 40, 'nangang-banqiao': 60, 'nangang-taoyuan': 155, 'nangang-hsinchu': 290, 'nangang-miaoli': 400,
    'nangang-taichung': 700, 'nangang-changhua': 790, 'nangang-yunlin': 920, 'nangang-chiayi': 1080, 'nangang-tainan': 1350, 'nangang-zuoying': 1490,
    'taipei-banqiao': 30, 'taipei-taoyuan': 125, 'taipei-hsinchu': 260, 'taipei-miaoli': 370,
    'taipei-taichung': 700, 'taipei-changhua': 790, 'taipei-yunlin': 920, 'taipei-chiayi': 1080, 'taipei-tainan': 1350, 'taipei-zuoying': 1490,
    'banqiao-taoyuan': 110, 'banqiao-hsinchu': 240, 'banqiao-miaoli': 350,
    'banqiao-taichung': 675, 'banqiao-changhua': 765, 'banqiao-yunlin': 895, 'banqiao-chiayi': 1055, 'banqiao-tainan': 1325, 'banqiao-zuoying': 1465,
    'taoyuan-hsinchu': 145, 'taoyuan-miaoli': 255, 'taoyuan-taichung': 580, 'taoyuan-changhua': 670, 'taoyuan-yunlin': 800,
    'taoyuan-chiayi': 960, 'taoyuan-tainan': 1230, 'taoyuan-zuoying': 1370,
    'hsinchu-miaoli': 120, 'hsinchu-taichung': 445, 'hsinchu-changhua': 535, 'hsinchu-yunlin': 665,
    'hsinchu-chiayi': 825, 'hsinchu-tainan': 1095, 'hsinchu-zuoying': 1235,
    'miaoli-taichung': 330, 'miaoli-changhua': 420, 'miaoli-yunlin': 550, 'miaoli-chiayi': 710, 'miaoli-tainan': 980, 'miaoli-zuoying': 1120,
    'taichung-changhua': 105, 'taichung-yunlin': 235, 'taichung-chiayi': 395, 'taichung-tainan': 665, 'taichung-zuoying': 790,
    'changhua-yunlin': 135, 'changhua-chiayi': 295, 'changhua-tainan': 565, 'changhua-zuoying': 705,
    'yunlin-chiayi': 165, 'yunlin-tainan': 435, 'yunlin-zuoying': 575,
    'chiayi-tainan': 280, 'chiayi-zuoying': 420,
    'tainan-zuoying': 145
};

// Global state
let currentBooking = {
    step: 1,
    departure: null,
    arrival: null,
    date: null,
    time: null,
    selectedTrain: null,
    seatClass: 'standard',
    seatPreference: 'any',
    ticketCount: 1,
    fare: 0
};

let orders = [];
let orderIdCounter = 1001;

// ===== Initialization =====
document.addEventListener('DOMContentLoaded', function () {
    initializeNavigation();
    initializeStationSelects();
    initializeTimetable();
    initializeDateInput();
    loadOrders();
    updateOrderDisplay();
});

// ===== Navigation =====
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.dataset.page;
            navigateToPage(page);

            // Close mobile menu
            navMenu.classList.remove('active');
        });
    });

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

function navigateToPage(pageName) {
    // Hide payment success if open
    const successPage = document.getElementById('paymentSuccessPage');
    if (successPage) successPage.style.display = 'none';

    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Show selected page
    const selectedPage = document.getElementById(`${pageName}-page`);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }

    // Update nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === pageName) {
            link.classList.add('active');
        }
    });

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== Booking System =====
function initializeStationSelects() {
    const departureSelect = document.getElementById('departureStation');
    const arrivalSelect = document.getElementById('arrivalStation');
    const timetableSelect = document.getElementById('timetableStation');

    // Add "all stations" option for timetable
    if (timetableSelect) {
        const allOption = document.createElement('option');
        allOption.value = 'all';
        allOption.textContent = '全部車站';
        timetableSelect.appendChild(allOption);
    }

    stations.forEach(station => {
        const option1 = document.createElement('option');
        option1.value = station.id;
        option1.textContent = station.name;

        const option2 = document.createElement('option');
        option2.value = station.id;
        option2.textContent = station.name;

        const option3 = document.createElement('option');
        option3.value = station.id;
        option3.textContent = station.name;

        if (departureSelect) departureSelect.appendChild(option1);
        if (arrivalSelect) arrivalSelect.appendChild(option2);
        if (timetableSelect) timetableSelect.appendChild(option3);
    });
}

function initializeDateInput() {
    const dateInput = document.getElementById('travelDate');
    if (dateInput) {
        // Set min date to today
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
        dateInput.value = today;
    }
}

function searchTrains() {
    const departure = document.getElementById('departureStation').value;
    const arrival = document.getElementById('arrivalStation').value;
    const date = document.getElementById('travelDate').value;
    const time = document.getElementById('travelTime').value;

    if (!departure || !arrival) {
        alert('請選擇出發站和到達站');
        return;
    }

    if (departure === arrival) {
        alert('出發站和到達站不能相同');
        return;
    }

    if (!date) {
        alert('請選擇出發日期');
        return;
    }

    currentBooking.departure = departure;
    currentBooking.arrival = arrival;
    currentBooking.date = date;
    currentBooking.time = time;

    // Determine direction
    const depIndex = stations.findIndex(s => s.id === departure);
    const arrIndex = stations.findIndex(s => s.id === arrival);
    const direction = depIndex < arrIndex ? 'southbound' : 'northbound';

    // Filter trains
    // Filter trains
    const timetable = direction === 'southbound' ? timetableSouthbound : timetableNorthbound;

    // Time validation
    const now = new Date();
    const isToday = document.getElementById('travelDate').value === now.toISOString().split('T')[0];
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    const availableTrains = timetable.filter(train => {
        const hasDepStation = train.stops.includes(departure);
        const hasArrStation = train.stops.includes(arrival);

        if (!hasDepStation || !hasArrStation) return false;

        const depStopIndex = train.stops.indexOf(departure);
        const arrStopIndex = train.stops.indexOf(arrival);

        if (depStopIndex >= arrStopIndex) return false;

        // Check if train has departed (if today)
        const depTime = train.times[depStopIndex];
        const [depH, depM] = depTime.split(':').map(Number);
        const depTotalMinutes = depH * 60 + depM;

        if (isToday && depTotalMinutes <= currentMinutes) {
            return false;
        }

        // Filter by selected time
        if (time !== '00:00') {
            const [selH, selM] = time.split(':').map(Number);
            const selTotalMinutes = selH * 60 + selM;
            if (depTotalMinutes < selTotalMinutes) return false;
        }

        return true;
    });

    displayTrains(availableTrains, departure, arrival);
    goToStep(2);
}

function displayTrains(trains, departure, arrival) {
    const trainList = document.getElementById('trainList');
    trainList.innerHTML = '';

    if (trains.length === 0) {
        trainList.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">查無符合的車次</p>';
        return;
    }

    const depStation = stations.find(s => s.id === departure);
    const arrStation = stations.find(s => s.id === arrival);

    trains.forEach(train => {
        const depIndex = train.stops.indexOf(departure);
        const arrIndex = train.stops.indexOf(arrival);
        const depTime = train.times[depIndex];
        const arrTime = train.times[arrIndex];

        // Calculate duration
        const [depHour, depMin] = depTime.split(':').map(Number);
        const [arrHour, arrMin] = arrTime.split(':').map(Number);
        const durationMin = (arrHour * 60 + arrMin) - (depHour * 60 + depMin);
        const hours = Math.floor(durationMin / 60);
        const minutes = durationMin % 60;
        const durationText = hours > 0 ? `${hours}小時${minutes}分` : `${minutes}分`;

        // Calculate fare
        const fare = calculateFare(departure, arrival, 'standard');

        const trainItem = document.createElement('div');
        trainItem.className = 'train-item';
        trainItem.innerHTML = `
            <div class="train-number">
                ${train.trainNo}
                <span class="train-type-badge">${train.typeName}</span>
            </div>
            <div class="train-info">
                <div>
                    <div class="train-time">${depTime} → ${arrTime}</div>
                    <div class="train-duration">行車時間：${durationText}</div>
                    <div class="train-free-seat"><small>自由座：${train.nonReserved}</small></div>
                </div>
            </div>
            <div class="train-price">NT$ ${fare}</div>
        `;

        trainItem.onclick = () => selectTrain(train, depTime, arrTime, durationText, fare);
        trainList.appendChild(trainItem);
    });
}

function selectTrain(train, depTime, arrTime, duration, fare) {
    currentBooking.selectedTrain = {
        ...train,
        depTime,
        arrTime,
        duration
    };
    currentBooking.fare = fare;

    updateFareInfo();
    goToStep(3);
}

function updateFareInfo() {
    const seatClass = document.getElementById('seatClass').value;
    const ticketCount = parseInt(document.getElementById('ticketCount').value);

    currentBooking.seatClass = seatClass;
    currentBooking.ticketCount = ticketCount;

    const baseFare = currentBooking.fare;
    const classMultiplier = seatClass === 'business' ? 1.5 : 1;
    const totalFare = Math.round(baseFare * classMultiplier * ticketCount);

    const fareInfo = document.getElementById('fareInfo');
    fareInfo.innerHTML = `
        <div class="fare-row">
            <span>基本票價</span>
            <span>NT$ ${baseFare}</span>
        </div>
        <div class="fare-row">
            <span>車廂等級</span>
            <span>${seatClass === 'business' ? '商務車廂 (×1.5)' : '標準車廂'}</span>
        </div>
        <div class="fare-row">
            <span>票數</span>
            <span>×${ticketCount}</span>
        </div>
        <div class="fare-row">
            <span>總金額</span>
            <span>NT$ ${totalFare}</span>
        </div>
    `;
}

function calculateFare(departure, arrival, seatClass) {
    const key1 = `${departure}-${arrival}`;
    const key2 = `${arrival}-${departure}`;

    const baseFare = baseFares[key1] || baseFares[key2] || 500;
    const multiplier = seatClass === 'business' ? 1.5 : 1;

    return Math.round(baseFare * multiplier);
}

function goToStep(step) {
    // Hide all steps
    for (let i = 1; i <= 4; i++) {
        const stepEl = document.getElementById(`step${i}`);
        if (stepEl) stepEl.style.display = 'none';

        const indicator = document.querySelector(`.step[data-step="${i}"]`);
        if (indicator) indicator.classList.remove('active');
    }

    // Show selected step
    const selectedStep = document.getElementById(`step${step}`);
    if (selectedStep) selectedStep.style.display = 'block';

    const selectedIndicator = document.querySelector(`.step[data-step="${step}"]`);
    if (selectedIndicator) selectedIndicator.classList.add('active');

    currentBooking.step = step;

    // Update content based on step
    if (step === 3) {
        updateFareInfo();

        // Add listeners
        const seatClassSelect = document.getElementById('seatClass');
        const ticketCountInput = document.getElementById('ticketCount');

        seatClassSelect.onchange = updateFareInfo;
        ticketCountInput.oninput = updateFareInfo;
    } else if (step === 4) {
        // Collect choices from Step 3
        const seatClass = document.getElementById('seatClass').value;
        const seatPreference = document.getElementById('seatPreference').value;
        const ticketCount = parseInt(document.getElementById('ticketCount').value);

        currentBooking.seatClass = seatClass;
        currentBooking.seatPreference = seatPreference;
        currentBooking.ticketCount = ticketCount;

        displayOrderSummary();
    }
}

function displayOrderSummary() {
    const depStation = stations.find(s => s.id === currentBooking.departure);
    const arrStation = stations.find(s => s.id === currentBooking.arrival);
    const seatClass = currentBooking.seatClass === 'business' ? '商務車廂' : '標準車廂';
    const baseFare = currentBooking.fare;
    const classMultiplier = currentBooking.seatClass === 'business' ? 1.5 : 1;
    const totalFare = Math.round(baseFare * classMultiplier * currentBooking.ticketCount);

    const orderSummary = document.getElementById('orderSummary');
    orderSummary.innerHTML = `
        <div class="summary-row">
            <span>車次</span>
            <span>${currentBooking.selectedTrain.trainNo} (${currentBooking.selectedTrain.typeName})</span>
        </div>
        <div class="summary-row">
            <span>日期</span>
            <span>${currentBooking.date}</span>
        </div>
        <div class="summary-row">
            <span>起迄站</span>
            <span>${depStation.name} → ${arrStation.name}</span>
        </div>
        <div class="summary-row">
            <span>時間</span>
            <span>${currentBooking.selectedTrain.depTime} → ${currentBooking.selectedTrain.arrTime}</span>
        </div>
        <div class="summary-row">
            <span>行車時間</span>
            <span>${currentBooking.selectedTrain.duration}</span>
        </div>
        <div class="summary-row">
            <span>車廂等級</span>
            <span>${seatClass}</span>
        </div>
        <div class="summary-row">
            <span>座位偏好</span>
            <span>${currentBooking.seatPreference === 'window' ? '靠窗' : currentBooking.seatPreference === 'aisle' ? '走道' : '不限'}</span>
        </div>
        <div class="summary-row">
            <span>票數</span>
            <span>${currentBooking.ticketCount} 張</span>
        </div>
        <div class="summary-row">
            <span>總金額</span>
            <span>NT$ ${totalFare}</span>
        </div>
    `;
}

function confirmBooking() {
    // Navigate to payment page instead of directly confirming
    showPaymentPage();
}

function resetBooking() {
    currentBooking = {
        step: 1,
        departure: null,
        arrival: null,
        date: null,
        time: null,
        selectedTrain: null,
        seatClass: 'standard',
        seatPreference: 'any',
        ticketCount: 1,
        fare: 0
    };

    // Reset form
    document.getElementById('departureStation').value = '';
    document.getElementById('arrivalStation').value = '';
    document.getElementById('travelTime').value = '00:00';
    initializeDateInput();
    goToStep(1);
}

// ===== Order Management =====
function updateOrderDisplay() {
    const orderList = document.getElementById('orderList');

    if (!orderList) return;

    if (orders.length === 0) {
        orderList.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 2rem;">目前沒有訂單</p>';
        return;
    }

    orderList.innerHTML = '';

    orders.forEach(order => {
        const orderItem = document.createElement('div');
        orderItem.className = 'order-item';

        let statusColor = 'var(--text-muted)';
        let statusText = '已取消';
        let actionButtons = '';

        if (order.status === 'confirmed') {
            statusColor = 'var(--accent)';
            statusText = '已確認';
            actionButtons = `
                <button class="btn-modify" onclick="modifyOrder(${order.id})">修改訂單</button>
                <button class="btn-cancel" onclick="cancelOrder(${order.id})">取消訂單</button>
            `;
        } else if (order.status === 'pending_payment') {
            statusColor = '#fbbf24';
            statusText = '待繳費';
            actionButtons = `
                <button class="btn-primary" style="font-size: 0.9rem; padding: 0.5rem 1rem;" onclick="showStoreCode(${order.id})">查看繳費代碼</button>
                <button class="btn-cancel" onclick="cancelOrder(${order.id})">取消訂單</button>
            `;
        } else if (order.status === 'cancelled') {
            statusText = '已取消';
        }

        orderItem.innerHTML = `
            <div class="order-header">
                <div class="order-id">訂單編號：${order.id}</div>
                <div class="order-status" style="color: ${statusColor}">
                    ${statusText}
                </div>
            </div>
            <div class="order-details">
                <div class="order-detail-item">
                    <div class="order-detail-label">車次</div>
                    <div class="order-detail-value">${order.trainNo} (${order.trainType})</div>
                </div>
                <div class="order-detail-item">
                    <div class="order-detail-label">日期</div>
                    <div class="order-detail-value">${order.date}</div>
                </div>
                <div class="order-detail-item">
                    <div class="order-detail-label">起迄站</div>
                    <div class="order-detail-value">${order.departure} → ${order.arrival}</div>
                </div>
                <div class="order-detail-item">
                    <div class="order-detail-label">時間</div>
                    <div class="order-detail-value">${order.depTime} - ${order.arrTime}</div>
                </div>
                <div class="order-detail-item">
                    <div class="order-detail-label">票數</div>
                    <div class="order-detail-value">${order.ticketCount} 張 (${order.seatClass})</div>
                </div>
                ${order.seats ? `
                <div class="order-detail-item">
                    <div class="order-detail-label">座位</div>
                    <div class="order-detail-value">${order.seats.join(', ')}</div>
                </div>
                ` : ''}
                <div class="order-detail-item">
                    <div class="order-detail-label">總金額</div>
                    <div class="order-detail-value">NT$ ${order.totalFare}</div>
                </div>
            </div>
            <div class="order-actions">
                ${actionButtons}
            </div>
        `;

        orderList.appendChild(orderItem);
    });
}

function modifyOrder(orderId) {
    const order = orders.find(o => o.id === orderId);
    if (!order) {
        alert('找不到此訂單');
        return;
    }

    if (!confirm('修改訂單將取消原訂單並重新訂票。\n\n是否確定要修改此訂單？')) {
        return;
    }

    showLoading();

    setTimeout(() => {
        // Cancel the original order
        order.status = 'cancelled';
        saveOrders();

        // Reset booking and navigate to booking page
        resetBooking();
        navigateToPage('booking');
        goToStep(1);

        hideLoading();
        alert('原訂單已取消，請重新選擇您的行程');
    }, 800);
}

function cancelOrder(orderId) {
    if (!confirm('確定要取消此訂單嗎？\n\n取消後將收取退票手續費：\n- 發車前2小時以上：票價10%\n- 發車前30分鐘至2小時：票價20%')) {
        return;
    }

    showLoading();

    setTimeout(() => {
        const orderIndex = orders.findIndex(o => o.id === orderId);
        if (orderIndex !== -1) {
            orders[orderIndex].status = 'cancelled';
            saveOrders();
            updateOrderDisplay();
            hideLoading();
            alert('訂單已成功取消');
        } else {
            hideLoading();
            alert('找不到此訂單');
        }
    }, 1000);
}

function saveOrders() {
    localStorage.setItem('thsr_orders', JSON.stringify(orders));
}

function loadOrders() {
    const saved = localStorage.getItem('thsr_orders');
    if (saved) {
        orders = JSON.parse(saved);
        // Update counter to avoid ID collision
        if (orders.length > 0) {
            orderIdCounter = Math.max(...orders.map(o => o.id)) + 1;
        }
    }
}

// ===== Timetable =====
function initializeTimetable() {
    const directionBtns = document.querySelectorAll('.direction-btn');

    directionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            directionBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            displayTimetable();
        });
    });

    // Add change listeners
    const timetableStation = document.getElementById('timetableStation');
    const trainTypeCheckboxes = document.querySelectorAll('.train-type-filters input[type="checkbox"]');

    if (timetableStation) {
        timetableStation.addEventListener('change', displayTimetable);
    }

    trainTypeCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', displayTimetable);
    });

    // Initial display
    displayTimetable();
}

function displayTimetable() {
    const direction = document.querySelector('.direction-btn.active')?.dataset.direction || 'southbound';
    const selectedStation = document.getElementById('timetableStation')?.value || 'all';
    const timetable = direction === 'southbound' ? timetableSouthbound : timetableNorthbound;

    // Get selected train types
    const selectedTypes = [];
    document.querySelectorAll('.train-type-filters input[type="checkbox"]:checked').forEach(checkbox => {
        selectedTypes.push(checkbox.value);
    });

    // Filter trains
    let filteredTrains = timetable.filter(train => selectedTypes.includes(train.type));

    if (selectedStation !== 'all') {
        filteredTrains = filteredTrains.filter(train => train.stops.includes(selectedStation));
    }

    const timetableDisplay = document.getElementById('timetableDisplay');

    if (!timetableDisplay) return;

    if (filteredTrains.length === 0) {
        timetableDisplay.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 2rem;">查無符合的車次</p>';
        return;
    }

    timetableDisplay.innerHTML = '';

    filteredTrains.forEach(train => {
        const timetableItem = document.createElement('div');
        timetableItem.className = 'timetable-item';

        const stopsHtml = train.stops.map((stopId, index) => {
            const station = stations.find(s => s.id === stopId);
            const time = train.times[index];
            const isSelected = stopId === selectedStation;
            return `<span class="stop-badge" style="${isSelected ? 'background: var(--primary); color: white;' : ''}">${station.name} ${time}</span>`;
        }).join('');

        timetableItem.innerHTML = `
            <div class="timetable-train">
                ${train.trainNo}
                <div style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.25rem;">${train.typeName}</div>
                <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.15rem;">自由座 ${train.nonReserved}</div>
            </div>
            <div class="timetable-stops">
                ${stopsHtml}
            </div>
            <div style="color: var(--accent); font-weight: 600;">
                ${direction === 'southbound' ? '往南' : '往北'}
            </div>
        `;

        timetableDisplay.appendChild(timetableItem);
    });
}

// ===== Utility Functions =====
function showLoading() {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) overlay.classList.add('active');
}

function hideLoading() {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) overlay.classList.remove('active');
}

// ===== Station Details Modal =====
function showStationDetails(stationId) {
    const details = stationDetails[stationId];
    if (!details) return;

    const modal = document.getElementById('stationModal');
    const modalContent = document.getElementById('stationModalContent');

    modalContent.innerHTML = `
        <div class="modal-header">
            <h2>🚄 ${details.name}</h2>
            <button class="modal-close" onclick="closeStationModal()">✕</button>
        </div>
        <div class="modal-body">
            <div class="station-detail-section">
                <h3>📍 地址</h3>
                <p>${details.address}</p>
            </div>
            <div class="station-detail-section">
                <h3>📞 電話</h3>
                <p>${details.phone}</p>
            </div>
            <div class="station-detail-section">
                <h3>ℹ️ 車站簡介</h3>
                <p>${details.description}</p>
            </div>
            <div class="station-detail-section">
                <h3>🚇 轉乘資訊</h3>
                <div class="transit-badges">
                    ${details.transit.map(t => `<span class="transit-badge">${t}</span>`).join('')}
                </div>
            </div>
            <div class="station-detail-section">
                <h3>🏢 站內設施</h3>
                <div class="facility-badges">
                    ${details.facilities.map(f => `<span class="facility-badge">${f}</span>`).join('')}
                </div>
            </div>
        </div>
    `;

    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('active'), 10);
}

function closeStationModal() {
    const modal = document.getElementById('stationModal');
    modal.classList.remove('active');
    setTimeout(() => modal.style.display = 'none', 300);
}

// ===== Payment System =====
let currentPaymentMethod = 'credit';

function showPaymentPage() {
    goToStep(5);
    updatePaymentSummary();
}

function selectPaymentMethod(method) {
    currentPaymentMethod = method;

    // Update active state
    document.querySelectorAll('.payment-method-card').forEach(card => {
        card.classList.remove('active');
    });
    event.target.closest('.payment-method-card').classList.add('active');

    // Show/hide payment forms
    document.querySelectorAll('.payment-form').forEach(form => {
        form.style.display = 'none';
    });

    const selectedForm = document.getElementById(`${method}Form`);
    if (selectedForm) {
        selectedForm.style.display = 'block';
    }
}

function updatePaymentSummary() {
    const depStation = stations.find(s => s.id === currentBooking.departure);
    const arrStation = stations.find(s => s.id === currentBooking.arrival);
    const baseFare = currentBooking.fare;
    const classMultiplier = currentBooking.seatClass === 'business' ? 1.5 : 1;
    const totalFare = Math.round(baseFare * classMultiplier * currentBooking.ticketCount);

    const summary = document.getElementById('paymentSummary');
    if (summary) {
        summary.innerHTML = `
            <div class="payment-summary-row">
                <span>車次</span>
                <span>${currentBooking.selectedTrain.trainNo}</span>
            </div>
            <div class="payment-summary-row">
                <span>日期</span>
                <span>${currentBooking.date}</span>
            </div>
            <div class="payment-summary-row">
                <span>路線</span>
                <span>${depStation.name} → ${arrStation.name}</span>
            </div>
            <div class="payment-summary-row">
                <span>時間</span>
                <span>${currentBooking.selectedTrain.depTime} - ${currentBooking.selectedTrain.arrTime}</span>
            </div>
            <div class="payment-summary-row">
                <span>票數</span>
                <span>${currentBooking.ticketCount} 張</span>
            </div>
            <div class="payment-summary-row total">
                <span>應付金額</span>
                <span>NT$ ${totalFare}</span>
            </div>
        `;
    }
}

function processPayment() {
    // Validate payment method
    if (currentPaymentMethod === 'credit') {
        const cardNumber = document.getElementById('cardNumber')?.value;
        const cardExpiry = document.getElementById('cardExpiry')?.value;
        const cardCVV = document.getElementById('cardCVV')?.value;
        const cardName = document.getElementById('cardName')?.value;

        if (!cardNumber || !cardExpiry || !cardCVV || !cardName) {
            alert('請填寫完整的信用卡資料');
            return;
        }

        // Validate card number (simple check)
        if (cardNumber.replace(/\s/g, '').length !== 16) {
            alert('請輸入正確的信用卡號碼（16位數字）');
            return;
        }
    } else if (currentPaymentMethod === 'linepay') {
        // LinePay simulation
    } else if (currentPaymentMethod === 'applepay') {
        // ApplePay simulation
    } else if (currentPaymentMethod === 'googlepay') {
        // GooglePay simulation
    } else if (currentPaymentMethod === 'store') {
        // Store code generation
    }

    // Show loading within the step
    const loadingEl = document.getElementById('payment-loading');
    if (loadingEl) loadingEl.style.display = 'block';

    const payBtns = document.querySelector('#step5 .step-buttons');
    if (payBtns) payBtns.style.display = 'none';

    // Simulate payment processing
    setTimeout(() => {
        const depStation = stations.find(s => s.id === currentBooking.departure);
        const arrStation = stations.find(s => s.id === currentBooking.arrival);
        const baseFare = currentBooking.fare;
        const classMultiplier = currentBooking.seatClass === 'business' ? 1.5 : 1;
        const totalFare = Math.round(baseFare * classMultiplier * currentBooking.ticketCount);

        const paymentMethodNames = {
            credit: '信用卡',
            linepay: 'LINE Pay',
            applepay: 'Apple Pay',
            store: '超商代碼'
        };

        const storeCode = currentPaymentMethod === 'store' ? Math.floor(100000000000 + Math.random() * 900000000000) : null;

        // Generate seats
        const seats = [];
        for (let i = 0; i < currentBooking.ticketCount; i++) {
            seats.push(generateSeat(currentBooking.seatClass, currentBooking.seatPreference));
        }

        const order = {
            id: orderIdCounter++,
            trainNo: currentBooking.selectedTrain.trainNo,
            trainType: currentBooking.selectedTrain.typeName,
            date: currentBooking.date,
            departure: depStation.name,
            arrival: arrStation.name,
            depTime: currentBooking.selectedTrain.depTime,
            arrTime: currentBooking.selectedTrain.arrTime,
            duration: currentBooking.selectedTrain.duration,
            seatClass: currentBooking.seatClass === 'business' ? '商務車廂' : '標準車廂',
            ticketCount: currentBooking.ticketCount,
            seats: seats,
            totalFare: totalFare,
            paymentMethod: paymentMethodNames[currentPaymentMethod],
            status: currentPaymentMethod === 'store' ? 'pending_payment' : 'confirmed',
            storeCode: storeCode,
            createdAt: new Date().toISOString()
        };

        orders.push(order);
        saveOrders();
        updateOrderDisplay();

        if (loadingEl) loadingEl.style.display = 'none';
        if (payBtns) payBtns.style.display = 'flex';

        // Show Success Page
        showSuccessPage(order);

        // Reset booking state for next time
        resetBooking();

    }, 2000);
}

// Seat Generation Logic
function generateSeat(seatClass, preference) {
    const isBusiness = seatClass === 'business';
    const carNum = isBusiness ? 6 : Math.floor(Math.random() * 9) + 1; // Biz in car 6 usually
    const row = Math.floor(Math.random() * 18) + 1; // 1-18 rows

    let col;
    const windowCols = isBusiness ? ['A', 'E'] : ['A', 'E'];
    const aisleCols = isBusiness ? ['C', 'D'] : ['C', 'D'];
    const otherCols = isBusiness ? [] : ['B'];
    const allCols = isBusiness ? ['A', 'C', 'D', 'E'] : ['A', 'B', 'C', 'D', 'E'];

    if (preference === 'window') {
        col = windowCols[Math.floor(Math.random() * windowCols.length)];
    } else if (preference === 'aisle') {
        col = aisleCols[Math.floor(Math.random() * aisleCols.length)];
    } else {
        col = allCols[Math.floor(Math.random() * allCols.length)];
    }

    return `${carNum}車 ${row}${col}`;
}

function showSuccessPage(order) {
    const page = document.getElementById('paymentSuccessPage');
    if (!page) return;

    // Populate data
    document.getElementById('successDepStation').textContent = order.departure;
    document.getElementById('successArrStation').textContent = order.arrival;
    document.getElementById('successDepTime').textContent = order.depTime;
    document.getElementById('successArrTime').textContent = order.arrTime;
    document.getElementById('successTrainNo').textContent = order.trainNo;
    document.getElementById('successDuration').textContent = order.duration;
    document.getElementById('successDate').textContent = order.date;
    document.getElementById('successSeat').textContent = order.seats.join(', ');
    document.getElementById('successCarClass').textContent = order.seatClass;
    document.getElementById('successPrice').textContent = `NT$ ${order.totalFare}`;
    document.getElementById('successOrderId').textContent = order.id;

    // Show
    page.style.display = 'flex';

    if (order.storeCode) {
        document.querySelector('.success-message').innerHTML = `
            訂單已成立！此為<b>超商繳費</b>訂單。<br>
            繳費代碼：<span style="color: var(--primary); font-family: monospace; font-size: 1.2em;">${order.storeCode}</span><br>
            請於三天內付款，謝謝。
        `;
    } else {
        document.querySelector('.success-message').textContent = '您的訂票已完成！祝您旅途愉快。';
    }

    // Auto redirect countdown
    const messageEl = document.querySelector('.success-message');
    const timerId = 'redirectTimer';

    // Hide payment step
    const step5 = document.getElementById('step5');
    if (step5) step5.style.display = 'none';

    // Remove existing timer if any
    const existingTimer = document.getElementById(timerId);
    if (existingTimer) existingTimer.remove();

    const timerDiv = document.createElement('div');
    timerDiv.id = timerId;
    timerDiv.style.marginTop = '1rem';
    timerDiv.style.color = 'var(--text-secondary)';
    messageEl.parentNode.insertBefore(timerDiv, messageEl.nextSibling);

    let seconds = 5;
    timerDiv.textContent = `將在 ${seconds} 秒後自動返回首頁...`;

    const countdown = setInterval(() => {
        seconds--;
        timerDiv.textContent = `將在 ${seconds} 秒後自動返回首頁...`;

        if (seconds <= 0) {
            clearInterval(countdown);
            navigateToPage('home');
        }
    }, 1000);
}

function showStoreCode(orderId) {
    const order = orders.find(o => o.id === orderId);
    if (order && order.storeCode) {
        alert(`訂單編號：${order.id}\n繳費代碼：${order.storeCode}\n\n請至各大便利商店機台輸入代碼繳費。`);
    } else {
        alert('此訂單無繳費代碼資料。');
    }
}

// Format credit card number input
function formatCardNumber(input) {
    let value = input.value.replace(/\s/g, '');
    let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
    input.value = formattedValue;
}

// Format expiry date input
function formatExpiry(input) {
    let value = input.value.replace(/\D/g, '');
    if (value.length >= 2) {
        value = value.slice(0, 2) + '/' + value.slice(2, 4);
    }
    input.value = value;
}


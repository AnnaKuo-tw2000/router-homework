<template>
    <div>
        <p>航班資料</p>
        <div class="messageBox" v-html="result"></div>
        <div><button @click="sendXhrRequest">取得</button></div>
    </div>
    <div class="filter" v-if="result.length > 1">
        <p>我的目的地：</p>
        <select @change="getFlightMsg">
            <option value="" disabled selected>請選擇</option>
            <option v-for="item in codeList" :key="item">
                {{ item }}
            </option>
        </select>
        <p>最快航班：</p>
        <p>{{ resultMessage }}</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            result: [],
            // targetList: [],
            // resultString: ''
            codeList: [],
            resultMessage: '',
            resource: [],

        }
    },
    methods: {
        sendXhrRequest() {
            fetch('https://tdx.transportdata.tw/api/basic/v2/Air/FIDS/Airport/Departure', {
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(),

            }).then(response => {
                if (response.ok) {
                    return response.json()
                }
            }).then(data => {
                data.forEach((cur) => {
                    if (!this.codeList.includes(cur.ArrivalAirportID)) {
                        this.codeList.push(cur.ArrivalAirportID);
                    }
                    return this.codeList.sort()
                })
                if (data) {
                    // console.log(data);
                    const resultData = data.reduce((accumulator, cur) => {
                        return (
                            accumulator +
                            `航班${cur.AirlineID}${cur.FlightNumber}到${cur.ArrivalAirportID
                            }，起飛時間是${this.formatDate(cur.ScheduleDepartureTime)}<br/>`
                        );
                    }, "");
                    this.resource = data;
                    this.result = resultData;
                    console.log(this.codeList)
                    console.log(this.result)
                    console.log(resultData)
                }

            }).catch(error => {
                console.error('请求错误：', error);
            });
        },
        formatDate(dateString) {
            const dateObj = new Date(dateString);
            const hour = dateObj.getHours().toString().padStart(2, "0");
            const minute = dateObj.getMinutes().toString().padStart(2, "0");

            return `${hour}:${minute}`;
        },
        findRecentFlight(resource, id) {
            const filterList = this.resource.filter((cur) => {
                return cur.ArrivalAirportID === id &&
                    new Date(cur.ScheduleDepartureTime).getTime() >
                    new Date().getTime() + 1 * 60 * 60 * 1000
            });
            if (filterList.length === 0) {
                return `很遺憾，台灣已經沒有1小時後起飛去往${id}的航班了，去重新安排旅程吧`;
            } else {
                const target = filterList.sort((a, b) => {
                    return (
                        new Date(a.ScheduleDepartureTime) -
                        new Date(b.ScheduleDepartureTime)
                    );
                })[0];
                return `很幸運，台灣還有${filterList.length
                    }架航班會在1小時後起飛去往${id}，最快的航班是${target.AirlineID
                    }${target.FlightNumber}，起飛時間是${this.formatDate(
                        target.ScheduleDepartureTime
                    )}`;
            }
        },
        getFlightMsg(e) {
            this.resultMessage = this.findRecentFlight(this.resource, e.target.value);
        }

    },

}

</script>
<style scoped>
p {
    margin: 2% 0 0 3%
}

.messageBox {
    width: 330px;
    height: 300px;
    border: 1px solid black;
    padding: 10px;
    margin-bottom: 20px;
    overflow: auto;
    /* display: block; */
    margin-left: 60px;
}

button {
    margin-left: 350px;
}

.filter {
    display: flex;
}

/* .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
} */


/* *:before,
*:after {
    box-sizing: border-box;
} */
</style>

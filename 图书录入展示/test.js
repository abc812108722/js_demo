<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            box-sizing: border-box;
        }
        .container {
            height: 100px;
            width: 700px;
            margin: 0 auto;
            border: 1px solid lightgreen;
        }
        .header {
            width: 100%;
            height: 40px;
            background-color: lightseagreen;
            color: white;
            line-height: 40px;
            padding-left: 10px;
        }
        .body {
            height: 60px;
            width: 100%;
            display: flex;
            font-size: 12px;
            justify-content: space-around;
        }
        .item {
            display: flex;
            margin-top: 12px;
        }
        .body input {
            height: 30px;
            outline: none;
            border: 1px solid lightgray;
            padding-left: 10px;
            font-size: 12px;
        }
        .body .tag {
            height: 30px;
            width: 40px;
            background-color: lightgray;
            text-align: center;
            border-radius: 3px 0 0 3px;
            line-height: 30px;
        }
        .body .item .bt {
            height: 30px;
            width: 40px;
            font-size: 12px;
            text-align: center;
            border-radius: 2px;
        }
        .bt:hover {
            cursor: pointer;
        }
        .content {
            width: 700px;
            margin: 20px auto;
        }
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th,td {
            width: 25%;
            height: 30px;
            line-height: 30px;
            padding-left: 15px;
            border: 1px solid lightgray;

        }
        tr {
            text-align: left;
        }
        a {
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">????????????</div>
        <div class="body">
            <div class="item">
                <div class="tag">??????</div>
                <input type="text" class="name" placeholder="???????????????" >
            </div>
            <div class="item">
                <div class="tag">??????</div>
                <input type="text" class="author" placeholder="???????????????">
            </div>
            <div class="item">
                <div class="tag">?????????</div>
                <input type="text" class="cbs" placeholder="??????????????????">
            </div>
            <div class="item">
                <input type="button" class="bt" value="??????">
            </div>
        </div>
    </div>
    <div class="content">
        <table>
            <tr>
                <th>??????</th>
                <th>??????</th>
                <th>?????????</th>
                <th>??????</th>
            </tr>
        </table>
    </div>
    <script>
        let name = document.querySelector('.name');
        let author = document.querySelector('.author');
        let cbs = document.querySelector('.cbs');
        let btn = document.querySelector('.bt');
        let table = document.querySelector('table');
        btn.addEventListener('click', () => {
            if(name.value.trim() =='' || cbs.value.trim() =='' || author.value.trim() =='') {return alert('????????????????????????')}
            let xhr = new XMLHttpRequest();
            xhr.open("GET", 'http://127.0.0.1:8000/server?name=' + name.value +'&author=' + author.value + "&cbs=" + cbs.value)
            xhr.send()
            xhr.onreadystatechange = function() {
            if(xhr.readyState === 4){
                if(xhr.status >=200) {
                    let res = JSON.parse(xhr.response);
                    let tr = document.createElement('tr');
                    let td1 = document.createElement('td');
                    td1.innerHTML = res.name;
                    tr.append(td1);
                    let td2 = document.createElement('td');
                    td2.innerHTML = res.author;
                    tr.append(td2);
                    let td3 = document.createElement('td');
                    td3.innerHTML = res.cbs;
                    tr.append(td3);
                    let td4 = document.createElement('td');
                    td4.innerHTML = "<a href='javascript:;'>??????</a>"
                    tr.append(td4);
                    table.append(tr);
                    //??????????????????
                    table.addEventListener('click', (e) => {
                        if(e.target.innerHTML === "??????") {
                            e.target.parentNode.parentNode.remove();
                        }
                    })
                    //???????????????a????????????????????????
                    // let a = document.querySelectorAll('a');
                    // for(let i = 0; i <= a.length-1; i++){
                    //     a[i].onclick = () => {
                    //         a[i].parentNode.parentNode.remove();
                    //     }
                    // }
                }
            }}
            name.value = '';
            author.value = '';
            cbs.value = '';
        })
    </script>
</body>
</html>

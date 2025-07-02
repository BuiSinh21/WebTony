const arr1 = [
    {
        col1: "Động từ tận cùng bằng 2 nguyên âm + 1 phụ âm hoặc tận cùng bằng 2 phụ âm thì thêm “ed”",
        col2: "look ➔  looked, want ➔ wanted"
    },
    {
        col1: "Động từ kết thúc bằng “e” hoặc “ee” thì chỉ thêm “d”",
        col2: "arrive ➔  arrived, like ➔ liked"
    },
    {
        col1: "Động từ tận cùng bằng phụ âm + “y” thì đổi “y” thành “i” trước khi thêm “ed” ",
        col2: "study ➔  studied, cry ➔ cried "
    },
    {
        col1: "Những động từ kết thúc bằng nguyên âm + “y” thì thêm “ed”",
        col2: "play ➔  played"
    },
    {
        col1: "Động từ chỉ có 1 âm tiết, tận cùng bằng 1 nguyên âm + 1 phụ âm thì gấp đôi phụ âm trước khi thêm “ed”",
        col2: "stop ➔  stopped"
    },
    {
        col1: "Những động từ tận cùng bằng “x” thì chỉ thêm “ed”",
        col2: "tax ➔  taxed"
    },
    {
        col1: "Động từ nhiều âm tiết, tận cùng bằng 1 nguyên âm + 1 phụ âm có trọng âm ở âm tiết cuối thì gấp đôi phụ âm trước khi thêm “ed”",
        col2: "prefer ➔  preferred"
    },
    {
        col1: "Động từ tận cùng bằng “L” thì gấp đôi phụ âm “L” (ngay cả khi trọng âm không ở âm tiết cuối) và thêm “ed”",
        col2: "travel ➔  traveled"
    },
    {
        col1: "Động từ tận cùng bằng “c” thì thêm “k” trước khi thêm “ed”",
        col2: "traffic ➔  trafficked"
    },    
]


const table1 = document.getElementById("table1");
for (var i = 0; i < arr1.length; i++) {
    var row = table1.insertRow(i + 1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = arr1[i].col1;
    cell2.innerHTML = arr1[i].col2;
}





const arr2 = [
  {
    col1: "Động từ có V1 tận cùng là “eed” thì V2, V3 là “ed”",
    col2: "feed(V1) → fed(V2) → fed(V3)",
  },
  {
    col1: "Động từ có V1 tận cùng là “ay” thì V2, V3 là “aid”",
    col2: "say(V1) → said(V2) → said(V3)",
  },
  {
    col1: "Động từ V1 có tận cùng là “d” thì V2, V3 là “t”",
    col2: "send(V1) → sent (V2) → sent (V3)",
  },
  {
    col1: "Động từ V1 có tận cùng là “ow” thì V2 là “ew”, V3 là “own”",
    col2: "blow(V1) → blew(V2) → blown(V3)",
  },
  {
    col1: "Động từ V1 có tận cùng là “ear” thì V2 là “ore”, V3 là “orn” (động từ hear ngoại lệ)",
    col2: "bear(V1) → bore(V2) → borne(V3)",
  },
  {
    col1: "Động từ V1 có nguyên âm “i” thì V2 là “a”, V3 là “u”",
    col2: "begin(V1) → began(V2) → begun(V3)",
  },
  {
    col1: "Động từ có V1 tận cùng là “m” hoặc “n” thì V2,V3 thêm “t”",
    col2: "burn(V1) → burnt(V2) → burnt(V3)",
  },
];


const table2 = document.getElementById("table2");
for (var i = 0; i < arr2.length; i++) {
    var row = table2.insertRow(i + 1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = arr2[i].col1;
    cell2.innerHTML = arr2[i].col2;
}











var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
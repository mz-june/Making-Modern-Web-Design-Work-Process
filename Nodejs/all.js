var fs=require("fs");fs.watch("files",function(o,s){console.log("이벤트: "+o),console.log("파일 이름: "+s)});var fs=require("fs");console.log("문서 쓰기 프로세스 시작...");var cssDoc="#nodejs { margin:0; padding: 0; }",options={encoding:"utf8"};fs.writeFileSync("files/style.css",cssDoc,options),console.log("코드의 흐름이 동기(Sync)적으로 처리!"),console.log("문서 쓰기 프로세스 끝.");
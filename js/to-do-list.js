// ***** To Do List Hazirlama *********

let input = document.querySelector("#task")             // -bugun ne yapacaksin?- butonunu input'a atadik.
let ul = document.querySelector("#list");               // ul'nin id'sini atadik
let li = document.querySelector("#list li");            // list'in idsine ulastik
let span = document.getElementsByClassName("close");    // close classina ulastik

function newElement() {

    // 'listeye bos element girdiniz' 

    if (input.value === "" || input.value.includes("  ") === true || input.value[0] === " " )   // eger input'un degeri bos ise veya degeri string true ise veya birinci input degeri bos ise 
        $(document).ready(function () {                                                         //  $(document).ready()  Ready fonksiyonu DOM yüklendikten sonra calısacak events belirtmenizi saglar.
            $('#error').toast('show')      // hata verilme uyarisi  'listeye bos element girdiniz' //  toast'in id'si(error) ulastik ve gosterilmesini sagladik
    } );

    else {

        // listeye ekleme yapmak icin:
    
        let add = document.createElement('li');              // li elementi olusturduk
        add.innerHTML = input.value;                         // butona yazilan degeri ekle
        ul.prepend(add);                                    // ul listesine ekle 
    
        let span = document.createElement("span");          // span elementini olusturduk 
        add.appendChild(span);                            // span elementini ekledik
        span.className = "close"                            // close classina ulastik
        span.innerHTML = "x";                               // "x" ekledik
    
        $(document).ready(function () {
            $("#success").toast('show');                    // listeye eklendi -toast- 
        });

        document.querySelector("#list li .close").addEventListener("click", function () {  //
            this.parentNode.remove();
        });
        //
        document.querySelector("#list li").addEventListener("click", function () {

            (this.classList.contains("checked"))    // oge ekle yada kaldir 
              ? this.classList.remove("checked")    // ekle 
              : this.classList.add("checked");      // kaldir 
      
        });
        // HTML olay işleyicilerinde, olayı this alan HTML öğesini ifade eder:
        //  <button onclick="this.style.display='none'">Click to Remove Me! </button>
        //
        input.value = "";

    }


}
    // uzerine tik atmak

    document.querySelectorAll("#list li").forEach(item => item.addEventListener("click", function () {
        (this.classList.contains("checked"))
        ? this.classList.remove("checked")
        : this.classList.add("checked");
    }))

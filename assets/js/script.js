const f_name = document.getElementById("f_name");
const salarys = document.getElementById("salary");
const buttoon = document.getElementById("calculate")
let inc_tax;
let pension;
let net_pay;
let pension_I = document.getElementById("pension_I");


function tax(){
    let salary = salarys.value
    inc_tax = parseFloat(inc_tax)
    pension = parseFloat(pension)
    net_pay = parseFloat(net_pay)

    if(pension_I.value === "0" && !salary){
        document.getElementById("result").innerHTML = `<strong class="error">Please enter a salary and,<br> select a pension!!!</strong>`
        pension = (salary * 0.07).toFixed(2)
    }
    
    if(pension_I.value === "1"){
        pension = (salary * 0.07).toFixed(2)
    }
    else if(pension_I.value === "2"){
        pension = 0
    }
    else{
        document.getElementById("result").innerHTML = `<strong class="error">Please select a pension!!!</strong>`
    }

    if (salary >= 0 && salary <= 600){
        inc_tax = 0
        net_pay = salary - parseFloat(pension + inc_tax)
        print()
    }
    else if (salary > 600 && salary <= 1650){
        inc_tax = salary * 0.1
        net_pay = salary - parseFloat(pension + inc_tax)
        print()
    }
    else if (salary > 1650 && salary <= 3200){
        inc_tax = salary * 0.15
        net_pay = salary - parseFloat(pension + inc_tax)
        print()
    }
    else if (salary > 3200 && salary <= 5250){
        inc_tax = salary * 0.2
        net_pay = salary - parseFloat(pension + inc_tax)
        print()
    }
    else if (salary > 5250 && salary <= 7800){
        inc_tax = salary * 0.25
        net_pay = salary - parseFloat(pension + inc_tax)
        print()
    }
    else if (salary > 7800 && salary <= 10900){
        inc_tax = salary * 0.3
        net_pay = salary - parseFloat(pension + inc_tax)
        print()
    }
    else if (salary > 10900){
        inc_tax = salary * 0.35
        net_pay = salary - parseFloat(pension + inc_tax)
        print()
    }
    else{
        document.getElementById("result").innerHTML = `<strong class="error">Please enter a valid salaty!!!</strong>`
    }
}

function print(){

    if(pension_I.value !== "1" && pension_I.value !== "2" && salary === ""){
        document.getElementById("result").innerHTML = `<strong class="error">Please enter a salary and,<br> select a pension!!!</strong>`
        pension = (salary * 0.07).toFixed(2)
    }

    if(pension_I.value === "1"){
        pension = (salary * 0.07).toFixed(2);
        document.getElementById("result").innerHTML = `
        <div class="desk">

        <label for="f_name">Full Name</label>
        <label for="salary">Salary</label>
        <label for="pension">Pension</label>
        <label for="inc_tax">Income Tax</label>
        <label for="net_pay">Gross Payment</label>

        </div>

        <div class="value">
    
        <label id="f_name">${f_name.value}</label>
        <label id="salary">${salarys.value}</label>
        <label id="pension">${pension}</label>
        <label id="inc_tax">${inc_tax}</label>
        <label id="net_pay">${net_pay}</label>
    
        </div>
                `;
    }
    else if(pension_I.value === "2"){
        pension = 0;
        document.getElementById("result").innerHTML = `
        <div class="desk">

        <label for="f_name">Full Name</label>
        <label for="salary">Salary</label>
        <label for="pension">Pension</label>
        <label for="inc_tax">Income Tax</label>
        <label for="net_pay">Gross Payment</label>

        </div>

        <div class="value">
    
        <label id="f_name">${f_name.value}</label>
        <label id="salary">${salarys.value}</label>
        <label id="pension">${pension}</label>
        <label id="inc_tax">${inc_tax}</label>
        <label id="net_pay">${net_pay}</label>
    
        </div>
                `;
    }
    else{
        document.getElementById("result").innerHTML = `<strong class="error">Please select a pension!!!</strong>`
    }
    
}

setSelectHover();

function setSelectHover(selector = "select") {
    let selects = document.querySelectorAll(selector);
    selects.forEach((select) => {
      let selectWrap = select.parentNode.closest(".select-wrap");
      // wrap select element if not previously wrapped
      if (!selectWrap) {
        selectWrap = document.createElement("div");
        selectWrap.classList.add("select-wrap");
        select.parentNode.insertBefore(selectWrap, select);
        selectWrap.appendChild(select);
      }
      // set expanded height according to options
      let size = 4;
  
      // adjust height on resize
      const getSelectHeight = () => {
        selectWrap.style.height = "auto";
        let selectHeight = select.getBoundingClientRect();
        selectWrap.style.height = selectHeight.height + "px";
      };
      getSelectHeight(select);
      window.addEventListener("resize", (e) => {
        getSelectHeight(select);
      });
  
      /**
       * focus and click events will coincide
       * adding a delay via setTimeout() enables the handling of
       * clicks events after the select is focused
       */
      let hasFocus = false;
      select.addEventListener("focus", (e) => {
        select.setAttribute("size", size);
        setTimeout(() => {
          hasFocus = true;
        }, 150);
      });
  
      // close select if already expanded via focus event
      select.addEventListener("click", (e) => {
        if (hasFocus) {
          select.blur();
          hasFocus = false;
        }
      });
  
      // close select if selection was set via keyboard controls
      select.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          select.removeAttribute("size");
          select.blur();
        }
      });
  
      // collapse select
      select.addEventListener("blur", (e) => {
        select.removeAttribute("size");
        hasFocus = false;
      });
    });
  }

buttoon.addEventListener("click", tax)
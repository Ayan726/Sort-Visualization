    const barContainer = document.querySelector('.bar-container');
    const slider = document.getElementById('slider');
    const randArray = [];
    const shuffle = document.getElementById('shuffle');
    const hist = [];
    let curind = 0;
    let funcRunning = false;
    let sorted = false;
    let blue = "to-blue-400";
    let red = "to-red-500";
    let purple = "to-purple-700";
    let orange = "to-orange-500";
    let yellow = "to-yellow-500";
    let pink = "to-pink-500";
    let h_trans = "transition-[height]";

    // change slider max value dynamically on screen size

    if(window.matchMedia("(min-width: 1024px)").matches){
        slider.setAttribute("max","30");
    }
    else if(window.matchMedia("(min-width: 768px)").matches){
        slider.setAttribute("max","22");
    }
    else{
        slider.setAttribute("max","10");
    }

    // hamburger

    const hamburger = document.querySelector('.hamburger');
    const flexnav = document.getElementById('flexnav');
    const circles = document.querySelectorAll('.circles');

    const menuslide = async () => {
        circles.forEach(el => {
            el.classList.toggle('rounded-[50%]');
            if(el.classList.contains('bg-white'))el.classList.replace('bg-white','bg-blue-200');
            else if(el.classList.contains('bg-blue-200'))el.classList.replace('bg-blue-200','bg-white');
            
        });

        if(flexnav.classList.contains('-right-96')){
            flexnav.classList.remove('hidden');
            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve();  
                }, 100);
                });
            flexnav.classList.replace('-right-96','right-0');
        }
        else if(flexnav.classList.contains('right-0')){
            flexnav.classList.replace('right-0','-right-96');

            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve();  
                }, 300);
                });
            
            flexnav.classList.add('hidden');
        }
    }

    hamburger.addEventListener('click' , menuslide);

    // initially number of bars
    const init = () => {
        for(let i=0;i<slider.value;i++){
            const size = Math.floor(Math.random()*(500-60+1))+60; // generates value between 60 and 500
            randArray.push(size);
            const div = document.createElement('div');
            div.classList.add('bar');
            div.classList.add('w-7');
            // div.classList.add('text-xs');
            div.style.height = `${size}px`;
            div.classList.add('bg-gradient-to-b');
            div.classList.add('from-white');
            div.classList.add(blue);
            div.classList.add(h_trans);
            div.insertAdjacentHTML('afterbegin',size);
            barContainer.appendChild(div);
        }
    }

    init();

    // slider function
    slider.addEventListener('input', (e) => {
        if(funcRunning){
            e.target.value = randArray.length;
            return;
        }
        if(sorted){
            e.target.value = randArray.length;
            return;
        }
        const arrLen = e.target.value;
        
        
        if(arrLen>randArray.length){
                let x = arrLen - randArray.length;
                while(x--){
                    const size = Math.floor(Math.random()*(500-60+1))+60;
                    randArray.push(size);
                    const div = document.createElement('div');
                    div.classList.add('bar');
                    div.classList.add('w-7');
                    div.style.height = `${size}px`;
                    div.classList.add('bg-gradient-to-b');
                    div.classList.add('from-white');
                    div.classList.add('to-blue-400');
                    div.classList.add(h_trans);
                    div.insertAdjacentHTML('afterbegin',size);
        
                    barContainer.appendChild(div);
                }
            
        }

        else{
            let x = randArray.length - arrLen;

            while(randArray.length>5 && x--){
                randArray.pop();
                const lastchild = barContainer.lastElementChild;
                barContainer.removeChild(lastchild);
            }
        }

    })

    //shuffle function

    shuffle.addEventListener('click', () => {
        sorted = false;
        if(funcRunning)return;
        const allbars = barContainer.children;
        for(let i=0;i<slider.value;i++){
            const size = Math.floor(Math.random()*(500-60+1))+60;
            randArray[i] = size;
            allbars[i].style.height = `${size}px`;
            if(allbars[i].classList.contains(purple))allbars[i].classList.replace(purple,blue);
            allbars[i].innerHTML = size;
        }
    })

    // color replacing

    const replace_blue = (i,allbars) => {
        
        if(allbars[i].classList.contains(red))allbars[i].classList.replace(red,blue);
        if(allbars[i].classList.contains(orange))allbars[i].classList.replace(orange,blue);
        if(allbars[i].classList.contains(purple))allbars[i].classList.replace(purple,blue);
        if(allbars[i].classList.contains(yellow))allbars[i].classList.replace(yellow,blue);
        if(allbars[i].classList.contains(pink))allbars[i].classList.replace(pink,blue);

    }

    
    const replace_red = (i,allbars) => {
        
        if(allbars[i].classList.contains(blue))allbars[i].classList.replace(blue,red);
        if(allbars[i].classList.contains(orange))allbars[i].classList.replace(orange,red);
        if(allbars[i].classList.contains(purple))allbars[i].classList.replace(purple,red);
        if(allbars[i].classList.contains(yellow))allbars[i].classList.replace(yellow,red);
        if(allbars[i].classList.contains(pink))allbars[i].classList.replace(pink,red);
    }


    const replace_orange = (i,allbars) => {
        
        if(allbars[i].classList.contains(red))allbars[i].classList.replace(red,orange);
        if(allbars[i].classList.contains(blue))allbars[i].classList.replace(blue,orange);
        if(allbars[i].classList.contains(purple))allbars[i].classList.replace(purple,orange);
        if(allbars[i].classList.contains(yellow))allbars[i].classList.replace(yellow,orange);
        if(allbars[i].classList.contains(pink))allbars[i].classList.replace(pink,orange);
    }

    const replace_purple = (i,allbars) => {
        
        if(allbars[i].classList.contains(red))allbars[i].classList.replace(red,purple);
        if(allbars[i].classList.contains(blue))allbars[i].classList.replace(blue,purple);
        if(allbars[i].classList.contains(orange))allbars[i].classList.replace(orange,purple);
        if(allbars[i].classList.contains(yellow))allbars[i].classList.replace(yellow,purple);
        if(allbars[i].classList.contains(pink))allbars[i].classList.replace(pink,purple);
        
    }

    const replace_yellow = (i,allbars) => {
        
        if(allbars[i].classList.contains(red))allbars[i].classList.replace(red,yellow);
        if(allbars[i].classList.contains(blue))allbars[i].classList.replace(blue,yellow);
        if(allbars[i].classList.contains(orange))allbars[i].classList.replace(orange,yellow);
        if(allbars[i].classList.contains(purple))allbars[i].classList.replace(purple,yellow);
        if(allbars[i].classList.contains(pink))allbars[i].classList.replace(pink,yellow);
        
    }

    const replace_pink = (i,allbars) => {
        
        if(allbars[i].classList.contains(red))allbars[i].classList.replace(red,pink);
        if(allbars[i].classList.contains(blue))allbars[i].classList.replace(blue,pink);
        if(allbars[i].classList.contains(orange))allbars[i].classList.replace(orange,pink);
        if(allbars[i].classList.contains(purple))allbars[i].classList.replace(purple,pink);
        if(allbars[i].classList.contains(yellow))allbars[i].classList.replace(yellow,pink);
        
    }

    

    // MergeSort 

    const merge = (randArray,l,m,r) => {
        let res = [];
        let i = l, j = m+1;
        while(i<=m && j<=r){
            if(randArray[i]<randArray[j]){
                res.push(randArray[i]);
                i++;
            }
            else {
                res.push(randArray[j]);
                j++;
            }
        }

        while(i<=m){
            res.push(randArray[i]);
            i++;
        }
        while(j<=r){
            res.push(randArray[j]);
            j++;
        }
        hist.push([l,m,r,res]);
        i = l;
            
        for(let el of res){
            randArray[i] = el;
            i++;
        }
        

    }

    const mergesort = (randArray,l,r) => {

        if(l>=r)return;

        let m = Math.floor(l + (r-l)/2);
        mergesort(randArray,l,m);
        mergesort(randArray,m+1,r);
        merge(randArray,l,m,r);


    }

    
    const animateMerge = () => {
        let allbars = barContainer.children;

        function processMerge(){
            let el = hist[curind];
            let low = el[0],mid = el[1],high = el[2],curArr = el[3];
            setTimeout(() => {
                for(let i = low;i<=mid;i++){
                    replace_red(i,allbars);
                }

                setTimeout(() => {
                    for(let i = mid+1;i<=high;i++){
                        replace_red(i,allbars);
                    }

                    setTimeout(() => {
                        for(let i = low;i<=high;i++){

                            replace_purple(i,allbars);

                            allbars[i].style.height = `${curArr[i-low]}px`;
                            allbars[i].innerText = curArr[i-low];
                        }
                        curind++;
                        if(curind < hist.length){
                            setTimeout(processMerge,500);
                        }
                        else{
                            funcRunning = false;
                            hist.length = 0;
                            curind = 0;
                            sorted = true;
                            merger.classList.remove("bg-green-500");
                            console.log("Array has been Sorted");
                        }
                    }, 500);
                }, 500);
            },0)
            
        }
        
        setTimeout(processMerge,0);
        
    }


    const merger = document.getElementById("merger");
    
    merger.addEventListener('click', () => {
        menuslide();
        if(funcRunning || sorted)return;

        merger.classList.add("bg-green-500");
        funcRunning = true;
        mergesort(randArray,0,randArray.length-1);
        animateMerge();
        console.log(randArray);
    })

    
    // bubble sort 

    const bubbleSort = (randArray) => {
        for(let i = 0;i<randArray.length - 1;++i){
            for(let j = 0;j<randArray.length - i - 1;++j){
                if(randArray[j] > randArray[j+1]){
                    [randArray[j],randArray[j+1]] = [randArray[j+1],randArray[j]];
                }
                hist.push([j,j+1,[randArray[j],randArray[j+1]]]);
            }
        }

    }



    const animateBubble = () => {
        let allbars = barContainer.children;
        let interval = randArray.length - 1;
        let a = randArray.length - 1;
        function processBubble(){
            let el = hist[curind];
            let low = el[0],high = el[1],curArr = el[2];
            setTimeout(() => {
                replace_red(low,allbars);
                
                setTimeout(() => {
                        replace_red(high,allbars);
                    
                    setTimeout(() => {
                        for(let i = low;i<=high;i++){
                            replace_blue(i,allbars);

                            allbars[i].style.height = `${curArr[i-low]}px`;
                            allbars[i].innerText = curArr[i-low];
                        }
                        
                        if(curind == interval-1){
                            replace_purple(a,allbars);
                            --a;
                            interval += a;
                        }


                        curind++;
                        if(curind < hist.length){
                            setTimeout(processBubble,500);
                        }
                        else{
                            replace_purple(a,allbars);
                            funcRunning = false;
                            hist.length = 0;
                            curind = 0;
                            sorted = true;
                            bubbler.classList.remove("bg-green-500");
                            console.log("Array has been Sorted");
                        }
                    }, 500);
                }, 500);
            },0)
            
        }
        
        setTimeout(processBubble,0);
        // processElement();
    }


    bubbler = document.getElementById('bubbler');

    bubbler.addEventListener('click' , () => {
        menuslide();
        if(funcRunning || sorted)return;
        bubbler.classList.add("bg-green-500");
        funcRunning = true;
        bubbleSort(randArray);
        animateBubble();
        console.log(randArray);

    })

    // quick sort
    
    async function partition(l,r,delay = 600){
        let allbars = barContainer.children;

        let pivot = Number(allbars[r].innerText);
        let i = l-1;

        replace_red(r,allbars);

        for(let j = l; j<r; j++){
            replace_yellow(j,allbars);

            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, delay);
            });

            let value = Number(allbars[j].innerText);

            if(value<pivot){
                ++i;
                let temp1 = allbars[i].style.height;
                let temp2 = allbars[i].innerText;
                allbars[i].style.height = allbars[j].style.height;
                allbars[j].style.height = temp1;
                allbars[i].innerText = allbars[j].innerText;
                allbars[j].innerText = temp2;
                replace_orange(i,allbars);
                if (i != j) replace_pink(j,allbars);
                
                await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, delay)
                );
            }
            else replace_pink(j,allbars);
                
        }

        i++;
        let temp1 = allbars[i].style.height;
        let temp2 = allbars[i].innerText;
        allbars[i].style.height = allbars[r].style.height;
        allbars[r].style.height = temp1;
        allbars[i].innerText = allbars[r].innerText;
        allbars[r].innerText = temp2;
        replace_pink(r,allbars);
        replace_blue(i,allbars);
        
        // To wait for 2100 milliseconds
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, delay * 2)
        );

        for(let i=0; i<randArray.length; ++i){
            replace_purple(i,allbars);
        }

        await new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, delay);
        });

        return i;
    }

    
    const quicksort = async (low,high) => {
        if(low>=high)return;

        let pi = await partition(low,high);

        await quicksort(low,pi-1);
        await quicksort(pi+1,high);
    }


    quicker = document.getElementById('quicker');

    quicker.addEventListener('click' , async () => {
        menuslide();
        if(funcRunning || sorted)return;
        quicker.classList.add("bg-green-500");
        funcRunning = true;
        await quicksort(0,randArray.length-1);
        quicker.classList.remove("bg-green-500");
        funcRunning = false;
        sorted = true;
        

    })


    // insertion sort

    const insertionSort = async (delay = 600) => {
        let allbars = barContainer.children;
        replace_purple(0,allbars);

        for(let i =1; i<allbars.length; ++i){
            let j = i;
            replace_red(j,allbars);
            
            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, delay);
            })

            while(j>0 && Number(allbars[j].innerText) < Number(allbars[j-1].innerText)){

                [allbars[j].innerText,allbars[j-1].innerText] = [allbars[j-1].innerText,allbars[j].innerText];
                
                allbars[j].style.height = `${allbars[j].innerText}px`;
                allbars[j-1].style.height = `${allbars[j-1].innerText}px`;

                replace_purple(j,allbars);

                --j;

                replace_red(j,allbars);
                
                await new Promise((resolve) => {
                    setTimeout(() => {
                        resolve();
                    }, delay);
                })
            }

            replace_purple(j,allbars);

        }


        
    }

    const inserter = document.getElementById('inserter');
    
    inserter.addEventListener('click', async () => {
        menuslide();
        if(funcRunning || sorted)return;
        inserter.classList.add("bg-green-500");
        funcRunning = true;
        await insertionSort();
        inserter.classList.remove("bg-green-500");
        funcRunning = false;
        sorted = true;
    })

    
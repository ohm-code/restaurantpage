import './style.css';
import nebula1 from './nebulaeye.jpeg';
import nebula2 from './nebula2.jpeg';
import nebula3 from './nebula3.jpg';

const pageLoad = ((pageName) => {
    const createNewElement = (elementTag, elementClassName, elementId)=>{ 
        let element = document.createElement(elementTag);
        element.className = elementClassName;
        element.id = elementId; 
        return element;  //returns a new element with given parameters
    }
    const createHeaderMenu = (arrayOfHeaderNames)=>{
        const headerMenu = createNewElement('div', 'headerMenu', 'headerMenu');
        arrayOfHeaderNames.forEach((currentValue,index)=>{
            index  = createNewElement('div','headerItem', currentValue);
            headerMenu.appendChild(index);
        })
        return headerMenu;
    }
    const clearPage = () =>{
        const page = document.querySelector('.page');
        page.remove();
        console.log('page removed')
    }

return {
    createNewElement,
    createHeaderMenu,
    clearPage
}
})()


    //main
    const div = document.querySelector('div')
    //header 
    const headerMenu = pageLoad.createHeaderMenu(['header1','header2','header3']);
    div.appendChild(headerMenu) 
 
    //page1
const loadPage1 = () =>
   {
    const page1 = pageLoad.createNewElement('div', 'page');
    const pageContent1 = pageLoad.createNewElement('div','content','pageContent1');
    const pageContent2 = pageLoad.createNewElement('div','content','pageContent2');
    const pageContent3 = pageLoad.createNewElement('div','content','pageContent3');


    const p1c1textbox =pageLoad.createNewElement('div', 'textbox', 'p1c1textbox');
    p1c1textbox.textContent = "here is some text content for this box"
    const p1c1ImgHolder =pageLoad.createNewElement('img', 'imgHolder', 'p1c1ImgHolder');

    p1c1ImgHolder.src = nebula1;


    const p1c2textbox =pageLoad.createNewElement('div', 'textbox', 'p1c2textbox');
    const p1c3textbox =pageLoad.createNewElement('div', 'textbox', 'p1c3textbox');
    p1c3textbox.textContent = "contact information:"
    const p1c3iframe =document.createElement('iframe');
    const googleMapsLink = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63833.231980735676!2d73.14289741361111!3d-0.6301752026039324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x24b599bfaafb7bbd%3A0x414509e181956289!2sMaldives!5e0!3m2!1sen!2sus!4v1639096087116!5m2!1sen!2sus`
    p1c3iframe.setAttribute('src', googleMapsLink)
    p1c3iframe.setAttribute('width', 400)
    p1c3iframe.setAttribute('height',300)
    p1c3iframe.setAttribute('loading','lazy')
    p1c3iframe.setAttribute('style','border:0')
        pageContent1.appendChild(p1c1textbox)
        pageContent1.appendChild(p1c1ImgHolder)
        pageContent2.appendChild(p1c2textbox)
        pageContent3.appendChild(p1c3textbox)
        pageContent3.appendChild(p1c3iframe)
        page1.appendChild(pageContent1)
        page1.appendChild(pageContent2)
        page1.appendChild(pageContent3)
        div.appendChild(page1)
}   //end page 1}
    
    //page 2
    
const loadPage2 = ()=>{
    const page1 = pageLoad.createNewElement('div', 'page');
    const pageContent1 = pageLoad.createNewElement('div','content','pageContent1');
    const pageContent2 = pageLoad.createNewElement('div','content','pageContent2');
    const pageContent3 = pageLoad.createNewElement('div','content','pageContent3');




    page1.appendChild(pageContent1)
    page1.appendChild(pageContent2)
    page1.appendChild(pageContent3)
    div.appendChild(page1)
}
const loadPage3 = ()=>{
    const page1 = pageLoad.createNewElement('div', 'page');
    const pageContent1 = pageLoad.createNewElement('div','content','pageContent1');
    const pageContent2 = pageLoad.createNewElement('div','content','pageContent2');
    const pageContent3 = pageLoad.createNewElement('div','content','pageContent3');

    page1.appendChild(pageContent1)
    page1.appendChild(pageContent2)
    page1.appendChild(pageContent3)
    div.appendChild(page1)
}

    //end page 2
//header behavior

loadPage1(); 
const headerItems = document.querySelectorAll('.headerItem')

const headerBorderReset =()=>{ 
    headerItems.forEach((currentValue)=>{
        let element = document.getElementById(currentValue.id)
        element.style.borderBottom = 'ridge';
    })}

headerItems.forEach(((currentValue,index) =>{
    let element = document.getElementById(currentValue.id)
    element.addEventListener('click',()=>{
        headerBorderReset();
        element.style.borderBottom = 'hidden';
        pageLoad.clearPage();
        switch(index){
            case 0: 
            loadPage1() 
            console.log('loadpage 1')
            break;
            case 1: 
            loadPage2()
            console.log('loadPageTwo()')
            break;
            case 2: 
            loadPage3()
            console.log('loadPageThree()')
            break;
        }
        console.log('click')

    }) 
}))


/*

        */

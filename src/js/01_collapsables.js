 
 function closeAllSection  (){
    designContent.classList.add ('collapsed');
    fillContent.classList.add ('collapsed');
    shareContent.classList.add ('collapsed');
    designArrow.classList.remove('arrow-collapsed');
    fillArrow.classList.remove('arrow-collapsed');
    shareArrow.classList.remove('arrow-collapsed');
 };
 
 function openDesignSection (){
    designContent.classList.remove ('collapsed');
    designArrow.classList.add('arrow-collapsed');
 };

 function openFillSection (){
    fillContent.classList.remove ('collapsed');
    fillArrow.classList.add('arrow-collapsed');
 };
 
 function openShareSection (){
    shareContent.classList.remove ('collapsed');
    shareArrow.classList.add('arrow-collapsed');
 };

 function handleClickDesign (){
    closeAllSection();
    openDesignSection();
 };
 
 function handleClickFill (){
    closeAllSection();
    openFillSection();
 };
 
 function handleClickShare (){
    closeAllSection();
    openShareSection();
 };
 
designLegend.addEventListener ('click', handleClickDesign);
fillLegend.addEventListener ('click', handleClickFill);
shareLegend.addEventListener ('click', handleClickShare);
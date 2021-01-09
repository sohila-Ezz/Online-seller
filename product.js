
    
	var selectedimg=[];
  ind=1;
  y=0
	var images=[
    {id:0,src:'imges/bluose.jpg',name:"blus",price:100,description:"with red color" },
	{id:1,src:'imges/dress.jpg',name:"dress",price:200,description:"red sot" },
	{id:2,src:'imges/trouser.jpg',name:"pantalon",price:300,description:"ginze" },
	{id:3,src:'imges/kutch.jpg',name:"shoose",price:400,description:"white" },
	{id:4,src:'imges/bag.jpg',name:"pag",price:500,description:"yallow" },
	{id:5,src:'imges/shose.jpg',name:"boots",price:600,description:"brrown" },
	{id:6,src:'imges/short.jpg',name:" short",price:700,description:"red" },
	{id:7,src:'imges/shirt.jpg',name:"shemz",price:800,description:"blue and white" },
	{id:8,src:'imges/Belt.jpg',name:"pads",price:900,description:"brrown" },
	{id:9,src:'imges/tshirt.jpg',name:"collection of t-shirts",price:1000,description:"manycolor" },
	
	] 
    class saller {
        constructor() {
          this.buttonContainer = document.querySelector('#menu');
          this.statusBar = document.querySelector('#stat');
          this.showProductSeleted = this.showProductSeleted.bind(this);
			 ind=this.index;
          this.products=[
            new product(this.buttonContainer,0 ),
            new product(this.buttonContainer,1 ),
            new product(this.buttonContainer,2 ),
            new product(this.buttonContainer,3 ),
            new product(this.buttonContainer,4 ),
            new product(this.buttonContainer,5 ),
            new product(this.buttonContainer,6 ),
            new product(this.buttonContainer,7 ),
            new product(this.buttonContainer,8 ),
            new product(this.buttonContainer,9 ),
          ];
          document.addEventListener('button-clicked', this.showProductSeleted); 
		   ind=this.index;
        }	
		
        showProductSeleted(event) {
          this.statusBar.textContent = event.detail.productDetails ;
		   let x=event.detail.id;
		  document.querySelector('#next').addEventListener('click',function(){
			   
			const text=document.querySelector('#stat');
			x+=1;
			   text.textContent='name: '+images[x%10].name+" "+'price: '+images[x%10].price+" "+'description: '+images[x%10].description
				text.classList.remove('hadden');
			   const pr=document.querySelector('#pro');
			   pr.classList.add('hadeen');
			  pimg.src=images[x%10].src;
				 pr.classList.remove('hadeen');
	           
		  });
		   document.querySelector('#selected').addEventListener('click',function(){
			   const show=document.querySelector('#show');
			   show.innerHTML='';
			   
			   for( let i=0;i<selectedimg.length;i++)
			   { const im=document.createElement('img');
		         im.src=selectedimg[i%10].src;
				 show.append(im);
			   }
			

		  });
      
		  document.querySelector('#sel').addEventListener('click',function(){
			   selectedimg.push(images[x%10]);  
			   
			   
		  });
		  
		  document.querySelector('#pre').addEventListener('click',function(){
			x=x-1;
			 if(x<0)
				 x=x%10+10;
			 const text=document.querySelector('#stat');
		   text.textContent='name: '+images[x%10].name+" "+'price: '+images[x%10].price+" "+'description: '+images[x%10].description
           text.classList.remove('hadden');
			   const pr=document.querySelector('#pro');
			   pr.classList.add('hadeen');
			  pimg.src=images[x%10].src;
				 pr.classList.remove('hadeen');
	      
		  });
		  
		  
        }
      }
	 class product {
	 constructor(containerElement,index ) {
	  this.containerElement = containerElement;
	  this.index=index;
	  this.onClick = this.onClick.bind(this);
	  const imag=document.createElement('img');
	  imag.src=images[this.index].src;
	  imag.addEventListener('click', this.onClick);
	   this.containerElement.append(imag);
        
	
	 }
	
		
	onClick()
	{  
	  ind=this.index;
	 const pr=document.querySelector('#pro');
		pr.classList.remove('hadeen');
		 const pimg=document.querySelector('#pimg');
		 pimg.classList.remove('hadeen');
	    pimg.src=images[this.index].src;
       ind=this.index;
	  const eventInfo = {  
		productDetails:'name: '+images[this.index].name+" "+'price: '+images[this.index].price+" "+'description: '+images[this.index].description
		,id:images[this.index].id
	  };
	  document.dispatchEvent(
		  new CustomEvent('button-clicked', { detail: eventInfo }));
		  
	}
  }
  new saller()
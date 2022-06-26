let objOfmobileData = {
    samsung:{
        galaxys22 :{
            Image:"./images of mobile stock/Samsung/samsung-galaxy-s22-ultra.jpg",
            Model: "Samsung Galaxy S22 ",
            Price: 255850,
            Color: "Phantom Black",
            Camera: "40MP",
            Storage: "256GB"
        },
        galaxyzflip3 :{
            Image:"./images of mobile stock/Samsung/samsung-galaxy-z-flip3.jpg",
            Model: "Samsung Galaxy Z Flip3 5G ",
            Price: 160000,
            Color: "Gray",
            Camera: "12MP",
            Storage: "256GB"
        },
        galaxya53 :{
            Image:"./images of mobile stock/Samsung/samsung-galaxy-a53.jpg",
            Model: "Samsung Galaxy A53  ",
            Price: 64999,
            Color: "Black",
            Camera: "64MP",
            Storage: "128GB"
        },
        galaxynote20 :{
            Image:"./images of mobile stock/Samsung/samsung-galaxy-note20-ultra.jpg",
            Model: "Samsung Galaxy Note20 Ultra 5G ",
            Price: 243278,
            Color: "Mystic Bronze",
            Camera: "108MP",
            Storage: "512GB"
        },
       galaxys21ultra :{
            Image:"./images of mobile stock/Samsung/samsung-galaxy-s21-ultra.jpg",
            Model: "Samsung Galaxy S21 Ultra 5G",
            Price: 216278,
            Color: "Phantom Titanium",
            Camera: "108MP",
            Storage: "512GB"
        }
    },
   infinix:{
    infinixhot12:{
        Image:"./images of mobile stock/infinix/infinix-hot12.jpg",
        Model: "Infinix Hot 12",
        Price: 33084,
        Color: "Lucky Green",
        Camera: "13MP",
        Storage: "256GB"
    }, 
    infinixhot11:{
        Image:"./images of mobile stock/infinix/infinix-hot-s8.jpg",
        Model: "Infinix Hot 11",
        Price: 20950,
        Color: "Emerald Green",
        Camera: "13MP",
        Storage: "128GB"
    },
    infinixhot10:{
        Image:"./images of mobile stock/infinix/infinix-hot-s8.jpg",
        Model: "Infinix Hot 10 Play",
        Price: 16000,
        Color: "Morandi Green",
        Camera: "13MP",
        Storage: "64GB"
    },
    infinixhot9:{
        Image:"./images of mobile stock/infinix/infinix-hot-s8.jpg",
        Model: "Infinix Hot 9 Play",
        Price: 22056,
        Color: "Violet",
    Camera: "13MP",
        Storage: "128GB"
    },
    infinixhot8:{
        Image:"./images of mobile stock/infinix/infinix-hot-s8.jpg",
        Model: "Infinix Hot 8",
        Price: 18000,
        Color: "Cosmic Purple",
        Camera: "14MP",
        Storage: "64GB"
    },
   },
   xiaomi:{
    redminote11:{
        Image:"./images of mobile stock/Xiaomi/Redmi Note 11.png",
        Model: "Redmi Note 11",
        Price: 25600,
        Color: "Cosmic Star Blue",
        Camera: "54MP",
        Storage: "128GB"
   },
   redminote10:{
        Image:"./images of mobile stock/Xiaomi/redmi-note-10.png",
        Model: "Redmi Note 10",
        Price: 20800,
        Color: "Onyx Gray",
        Camera: "48MP",
        Storage: "128GB"
   },
   redminote9:{
        Image:"./images of mobile stock/Xiaomi/redmi-note-9.png",
        Model: "Redmi Note 9",
        Price: 18999,
        Color: "Gray",
        Camera: "48MP",
        Storage: "128GB"
   },
   redminote8:{
        Image:"./images of mobile stock/Xiaomi/redmi-note-8.png",
        Model: "Redmi Note 8",
        Price: 26467,
        Color: "Neptune Blue",
        Camera: "32MP",
        Storage: "128GB"
   },
   redminote7:{
        Image:"./images of mobile stock/Xiaomi/redmi-note-7.png",
        Model: "Redmi Note 8",
        Price: 17320,
        Color: "Blue",
        Camera: "48MP",
        Storage: "128GB"
  }
},
    oppo:{
        oppof17:{
            Image:"./images of mobile stock/Oppo/Oppo f17.webp",
            Model: "Oppo F17",
            Price: 26799,
            Color: "Dynamic Orange",
            Camera: "32MP",
            Storage: "128GB"
        },
        oppof19:{
            Image:"./images of mobile stock/Oppo/Oppo f19.webp",
            Model: "Oppo F19",
            Price: 32000,
            Color: "Midnight Blue",
            Camera: "32MP",
            Storage: "128GB"
        },
        oppof21:{
            Image:"./images of mobile stock/Oppo/Oppo f21 pro.webp",
            Model: "Oppo F21",
            Price: 36599,
            Color: "Sunset Orange",
            Camera: "54MP",
            Storage: "128GB"
        },
        oppok10:{
            Image:"./images of mobile stock/Oppo/Oppo k10.webp",
            Model: "Oppo K10",
            Price: 38999,
            Color: "Ocean Blue",
            Camera: "64MP",
            Storage: "128GB"
        },
        oppofindx:{
            Image:"./images of mobile stock/Oppo/Oppo Find X2.png",
            Model: "Oppo find X",
            Price: 40000,
            Color: "Black Ceramic",
            Camera: "48MP",
            Storage: "256GB"
        }
    },
    iphone:{
        iphone13:{
            Image:"./images of mobile stock/Iphone/iphone-13.jpg",
            Model: "Iphone 13",
            Price: 459700,
            Color: "Midnight",
            Camera: "32MP",
            Storage: "128GB"
        },
        iphone12:{
            Image:"./images of mobile stock/Iphone/iphone-12.png",
            Model: "Iphone 12",
            Price: 255000,
            Color: "Pacific Blue",
            Camera: "32MP",
            Storage: "128GB"
        },
        iphone11:{
            Image:"./images of mobile stock/Iphone/iphone-11.png",
            Model: "Iphone 11",
            Price:  168000,
            Color: "Red",
            Camera: "54MP",
            Storage: "128GB"
        },
        iphone10:{
            Image:"./images of mobile stock/Iphone/iphone-x.png",
            Model: "Iphone X",
            Price:  80500,
            Color: "Rose gold",
            Camera: "54MP",
            Storage: "128GB"
        },
        iphone7:{
            Image:"./images of mobile stock/Iphone/iphone-7.jpg",
            Model: "Iphone 7",
            Price:  40800,
            Color: "Silver",
            Camera: "54MP",
            Storage: "128GB"
        }
    }
}



//? now here we goes with the code 
//* first we make function 
function MobileDataFinder(){

    
    //!take value of user input 
    var mobileBrand = document.getElementById("Mobilebrand").value.toLowerCase()
    var mobileModel = document.getElementById("Mobilemodel").value.toLowerCase()
    

 
//? if condition for verifing that the data is here or not

    if (objOfmobileData[mobileBrand] !== undefined) {

        if (objOfmobileData[mobileBrand][mobileModel] !== undefined) {
        

            var num1 = `<img src='${objOfmobileData[mobileBrand][mobileModel].Image}' class="img">`
            var num2 = objOfmobileData[mobileBrand][mobileModel].Model
            var num3 = objOfmobileData[mobileBrand][mobileModel].Price
            var num4 = objOfmobileData[mobileBrand][mobileModel].Color
            var num5 = objOfmobileData[mobileBrand][mobileModel].Camera
            var num6 = objOfmobileData[mobileBrand][mobileModel].Storage
           
             
            //TODO to print in the web page using html tags 
            // var property1 = document.getElementById("charactersList1").innerHTML = "Image: "+ num1
            var property2 = document.getElementById("charactersList1").innerHTML = "Model: "+ num2
            var property3 = document.getElementById("charactersList2").innerHTML = "Price: "+  num3
            var property4 = document.getElementById("charactersList3").innerHTML = "Color: "+  num4
            var property5 = document.getElementById("charactersList4").innerHTML = "Camera: "+  num5
            var property6 = document.getElementById("charactersList5").innerHTML = "Storage: "+  num6
            
            var imageShow = document.getElementById("img")
  imageShow.innerHTML= num1
        } else {
    
            alert("Data not found");
    
        }
    
      } else {
    
        alert("Data not found");
}

}

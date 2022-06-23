import { toHaveAccessibleName } from '@testing-library/jest-dom/dist/matchers';
import React, { useState } from 'react'
import"./App.css"

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

export default function App() {
    const [warna, setWarna] = useState ("black");
    const [angka, ubahAngka] = useState (0);
    const [jenis, ubahJenis] = useState ("tambah");
    const [arrayKotak, setArrayKotak] = useState ([
        {
            nama : "random",
            id : Math.floor(Math.random() * 1000000),
            warnaKotak: getRandomColor()
        },
        {
            nama : "ungu tua",
            id : Math.floor(Math.random() * 1000000),
            warnaKotak: "#9EA8E1" 
        },
        {
            nama : "ungu sedang",
            id : Math.floor(Math.random() * 1000000),
            warnaKotak: "#CFD4F4"
        },
        {
            nama : "ungu muda",
            id : Math.floor(Math.random() * 1000000),
            warnaKotak: "#E8ECF4"
        },
    ])

    const listKotak = arrayKotak.map((item, i) => (
        <div 
        onClick ={() => {
            // deleteArray(item.id);
        editArray (i);
    }}
        className="grid3" style={{backgroundColor:item.warnaKotak}}>
            <b> {item.nama} </b>
        </div> 
    ));

    const tambahArray = () => {
        const kotakTambahan = {
            nama : "orange",
            id : Math.floor(Math.random() * 1000000),
            warnaKotak: "#F3D09D"
        };
        setArrayKotak((arrayKotak)=>[...arrayKotak, kotakTambahan]);
    };

    const deleteArray = (id) => {
        setArrayKotak(arrayKotak.filter((item) => item.id !== id));
    };

    const editArray = (i) => {
        const ubahKotak = {
            id: Math.floor(Math.random() * 1000000),
            warnaKotak: "#008080"
        };
        const newArray = [...arrayKotak]
        newArray[i] = ubahKotak;
        setArrayKotak(newArray);
    }

return (
  <div>
   <div className ="grid1">
    <div onClick={()=>{
        if (warna==="black"){
            setWarna("red")
        } else if (warna==="red") {
            setWarna("yellow")
        } else {
            setWarna("black")
        }
        tambahArray()

        if (jenis==="tambah") {
            if (angka===10){
                ubahAngka (angka-1);
                ubahJenis ("kurang");
            } else {
                ubahAngka (angka+1)
            }
        } else {
            if (angka===0) {
                ubahAngka (angka+1)
                ubahJenis ("tambah");
            } else {
                ubahAngka (angka-1);
            }
        }

        }} 
        className="grid2"
        
        style={{
            display:"flex",
            justifyContent : "center", 
            allignItem: "center",
        }}
    >
        <b style={{color:"white"}}> ANGKA:{angka} </b>        
    </div>

    {listKotak}
   </div>
  </div>
 )
}



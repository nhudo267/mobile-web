import React , { useEffect, useState }  from "react";
import {getCategories} from "../service/Api"

export default function Menu() {

  const [category, setCategory] = useState([])

  useEffect(() => {
    const getCategory = async () => {
       const result = await getCategories()
        setCategory(result.data.data)
      
    }
    
    getCategory();
    
  }, []);
  console.log(category);
  return (
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12">
        <nav>
          <div id="menu" class="collapse navbar-collapse">
            <ul>
  
              {category.map((e)=>
              <li class="menu-item" key={e._id} >
                  <a href="#" >{e.name}</a>
              </li>)}
            </ul>
          </div>
        </nav>
      </div>
    </div>
    
  );
}

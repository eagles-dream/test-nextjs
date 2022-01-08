import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Item from '/component/item'
import { Loader } from 'semantic-ui-react'

const Post = () => {
  const router = useRouter()
  const { id } = router.query
  const [item, setItem] = useState({})
  const [isLoding, setIsLoding] = useState(true)  

  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`
  const getData = () => {
    axios.get(API_URL).then((res)=>{
      setItem(res.data)
      setIsLoding(false)
    })
  }

  useEffect(()=>{
    if(id && id > 0) {
      getData();
    }
  }, [id]);

  return(
    <div>
      {
        isLoding
        ? <div style={{padding:"100px 0"}}>
            <Loader inline='centered' active>Loading</Loader>
          </div>  
        : <Item item={item} />
      }
    </div>
  )
}

export default Post;
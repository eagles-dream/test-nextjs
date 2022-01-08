function Coupang({data}) {
  //console.log(data)
  //console.log(typeof(data))

  const start = data.indexOf("[")
  //console.log(start)
  const end = data.indexOf("]", start)
  //console.log(end)
  const item = data.substring(start+1, end-1)
  //console.log(item)
  //console.log(typeof(item))
  //const items = item.replace(/"/g, "")
  //console.log(items)
  //console.log(typeof(items))
  
  const list = item.split("},")
  const lists = list.map((a)=>{return a.concat("}")})
  //console.log(lists[0])
  //console.log(typeof(lists[0]))
  //console.log(typeof(lists[0]))
  
  //const final = JSON.parse(lists[0])
  const final = lists.map((a)=>{return JSON.parse(a)})
  //console.log(final)
  //console.log(typeof(final))
  //console.log(final.map((a)=>{return a.name}))
  //const final = list.map((a)=>{a.replace()})

  //console.log(final.map((a)=>{return Object.keys(a)}))
  
  const baseUrlStart = data.indexOf("thumbnailBaseUrl")
  const baseUrlEnd = data.indexOf(",", baseUrlStart)
  //console.log(baseUrlStart)
  //console.log(baseUrlEnd)
  const baseUrl = data.substring(baseUrlStart+18, baseUrlEnd)
  //console.log(baseUrl)
  
  /* const axios = require('axios');
  
  const config = {
    method: 'get',
    url: 'https://ads-partners.coupang.com/widgets.html?id=546675&template=carousel&trackingCode=AF6264577&subId=&width=680&height=70',
    headers: {}
  };

  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  }); */

  return (
    <div>
      { 
        final.map((a, productId)=>{return <li key={productId}>{a.name}</li>})
      }
    </div>
  );
}

export default Coupang;
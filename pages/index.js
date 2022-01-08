import axios from 'axios';
import Coupang from '../component/coupang';

function Home({data}) {
  return (
    <div>
      <Coupang data={data} />
    </div>
  );
}

export default Home;

/* export async function getStaticProps() {
  const res = await axios('https://ads-partners.coupang.com/widgets.html?id=546675&template=carousel&trackingCode=AF6264577&subId=&width=680&height=70')
  const data = await res.data;
  
  return { props: { data } }
} */

export async function getServerSideProps() {
  const res = await axios('https://ads-partners.coupang.com/widgets.html?id=546675&template=carousel&trackingCode=AF6264577&subId=&width=680&height=70')
  const data = await res.data;
  
  return { props: { data } }
}
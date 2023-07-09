import {Sora} from "@next/font"


const sora = Sora({
subsets:['latin'],
variable: '--font-sora',
weight:['100','200','300','400','500','600','700','800'],

});


import Nav from '../components'

const Layout = ({children}) => {
  return <div><Nav/></div>;
};

export default Layout;

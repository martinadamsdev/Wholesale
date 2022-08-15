import { FC, useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";

interface GoodsProps {

}

const Goods: FC<GoodsProps> = () => {

  const [goods, setGoods] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get('/api', {
        params: {
          method: 'alibaba.wholesale.goods.get',
          app_key: '', //  We need to apply for the appKey.
          timestamp: dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'),
          sign_method: 'hmac',
          sign: '67D2585DB2B2DEA9060DA99E23943764',
          format: 'json',
          v: '2.0'
        }
      })
      console.log(res);
      setGoods(res)
    })()
  }, [])

  return <>Goods</>
}

export default Goods;
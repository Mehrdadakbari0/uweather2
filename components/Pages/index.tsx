import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles

  let name




  return (
    <div style={{ direction: "ltr", minHeight: "11vh", }}>
      <br-x />
      <Window title={name} style={{
        minHeight: 200, margin: 10, width: "calc(100% - 20px)",
        backgroundImage: 'url("https://cdn.turing.team/research/0/bg.webp")',

      }}>
        {/* <pre style={{ direction: "rtl" }}>{JSON.stringify(props, null, 2)}</pre> */}


        <c-x >
        <br-x />
          <br-x />
          <br-x />
          <f-csb style={{ padding: "0 20px", color: "lightsteelblue", fontSize: 30 }}>   weather:  </f-csb>
          <br-x />

          <f-cc style={{ padding: "0 50px", color: "white", fontSize: 15 }}> {props.date} </f-cc>
          <f-cc style={{ padding: "0 50px", color: "white", fontSize: 15 }}>{props.time}</f-cc>






          <br-x />
          <f-20 style={{ padding: "0 20px", color: "lightsteelblue" }}>   weather:  </f-20>
          <br-x />
          <f-cse>
            <f-cc style={{ height: 80, width: 300, backgroundColor: "lightgray", borderRadius: 15 }}>
              <img src="https://cdn.turing.team/research/56/i.png"
                style={{ height: 30, objectFit: "contain" }} />
              <sp-2 />
              <f-cc>
                <f-14>pressure:</f-14>
                <sp-1 />
                <f-14>{props.pressure}</f-14>
              </f-cc>

            </f-cc>
            <f-cc style={{ height: 80, width: 300, backgroundColor: "lightgray", borderRadius: 15 }}>
              <img src="https://cdn.turing.team/research/56/i.png"
                style={{ height: 30, objectFit: "contain" }} />
              <sp-2 />
              <f-cc>
                <f-14>فشار:</f-14>
                <sp-1 />
                <f-14>{props.pressure}</f-14>
              </f-cc>
            </f-cc>

          </f-cse>
          <br-x />



          <br-x />
          <f-cc style={{ width: "100%", color: "white" }}>
            <f-13>تهیه شده توسط  گروه پژوهشی تورینگ </f-13>
          </f-cc>

        </c-x>



        {/*  <div style={{ direction: "ltr", fontSize: 15 }}>
          <span>Feels like:  {props.feelslikec} °C</span>
          <br />
          <span>Humidity:  {props.humidity} % RH </span>
          <br />
          <span>Pressure:  {props.pressure} atm</span>
          <br />
          <span> server date:  {props.date}</span>
          </div> */}



      </Window>
    </div>
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;


  let data = await (await fetch("https://cdn.turing.team/research/api/weather")).json()

  let feelslikec = data.current_condition[0].FeelsLikeC
  let humidity = data.current_condition[0].humidity
  let pressure = data.current_condition[0].pressure

  let date = new Date().toLocaleDateString()
  let time = new Date().toLocaleTimeString()

  return {
    props: {
      data: global.QSON.stringify({
        session,
        feelslikec,
        humidity,
        pressure,
        date,
        time,
        // nlangs,
      })
    },
  }
}
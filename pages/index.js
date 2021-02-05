import React from "react";
import MyWonderfulComponent from "../src/components/MyWonderfulComponent"

export async function getServerSideProps() {
    const res = await fetch(`http://localhost:3000/api/hello`)
    const data = await res.json()

    return {
        props: {data}
    }
}

export default function Page({id, options, count, color, data}) {
    return <MyWonderfulComponent id={id} options={options} count={count} color={color} data={data}>
        I'm text from a component
    </MyWonderfulComponent>
}
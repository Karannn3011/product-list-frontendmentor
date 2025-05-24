export default function Confirmation(props) {

    if (props.confirm) {
        return (
        <>
        <div className="fixed inset-0 bg-black/50">
        <div className="fixed bg-white w-full bottom-0 rounded-lg p-5">
            <img src="./src/assets/images/icon-order-confirmed.svg" alt="confirmed" />
            <h1 className="text-5xl font-semibold mt-3">Order Confirmed</h1>
            <p className="text-rose-900/60 mt-3">We hope you enjoy your food!</p>

            {props.expression}
        </div>
            
        </div>
        </>
    )
    }
    
}
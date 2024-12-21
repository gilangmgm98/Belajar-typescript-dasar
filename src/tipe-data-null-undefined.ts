export function sayHelloName(name?: string | null) {
    if (name) {
        // console.log(`Hello!, ${name}`)
        return `Hello!, ${name}`
    } else if (name === null) {
        // console.log('Hello!, NULL!')
        return 'Hello!, NULL!'
    } else {
        // console.log('Hello!, Undefined!')
        return 'Hello!, Undefined!'
    }
} 
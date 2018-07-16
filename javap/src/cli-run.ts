import { main } from './cli';
(async function () {
  try {

    await main()
  } catch (error) {
    throw error
  }
})()
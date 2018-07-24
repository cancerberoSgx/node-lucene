import { mainCli } from './cli';
(async function () {
  try {
    await mainCli()
  } catch (error) {
    throw error
  }
})()
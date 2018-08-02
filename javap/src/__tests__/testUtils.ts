import { listDefaultLibs } from '../listDefaultLibs';

export const javapJsonJar = 'node_modules/javap-json/dist/javap-json.jar'
export const rtJar = listDefaultLibs().find(j => j.endsWith('rt.jar')) || '/usr/lib/jvm/java-8-jdk/jre/lib/rt.jar'
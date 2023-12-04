#!/usr/bin/env node

import { program } from "commander";
import clipboard from 'clipboardy';

import { scramble } from "@feydr/txt-scramble-lib";


program.version("1.0.0");

program
    .argument("<strInput>")
    .description("scramble string into alt chars")
    .action((strInput) => {        
        const r = scramble(strInput);
        clipboard.writeSync(r);
        console.log(`${r} - COPIED TO CLIPBOARD`);        
    });

program.parse(process.argv);

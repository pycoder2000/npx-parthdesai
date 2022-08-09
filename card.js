#!/usr/bin/env node

"use strict";

const fs = require("fs");
const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

clear();

const prompt = inquirer.createPromptModule();

const questions = [
  {
    type: "list",
    name: "action",
    message: "What you want to do?",
    choices: [
      {
        name: `Send me an ${chalk.green.bold("email")}?`,
        value: () => {
          open("mailto:desaiparth2000@gmail.com");
          console.log("\nDone, I'll try to reply as soon as possible.\n");
        },
      },
      {
        name: `Visit my ${chalk.blue.bold("Website")}?`,
        value: () => {
          open("https://musing.vercel.app");
          console.log("\nThank you for visiting my website.\n");
        },
      },
      {
        name: "Just quit.",
        value: () => {
          console.log("Bye bye. Have a nice day.\n");
        },
      },
    ],
  },
];

const data = {
  name: chalk.bold.blue("                     Parth Desai"),
  handle: chalk.white("@pycoder2000"),
  work: `${chalk.white(" Data Engineer")} ${chalk.hex("#2b82b2").bold("@Accenture")}`,
  github: chalk.white("https://github.com/") + chalk.cyan("pycoder2000"),
  linkedin: chalk.white("https://linkedin.com/in/") + chalk.cyan("parth-desai-2bb1b0160"),
  twitter: chalk.white("https://twitter.com/") + chalk.cyan("lone_Musk"),
  web: chalk.blue("https://musing.vercel.app"),
  npx: chalk.blue("npx") + " " + chalk.cyan("parthdesai"),

  labelWork: chalk.white.bold("       Bio:"),
  labelTwitter: chalk.white.bold("    Twitter:"),
  labelGitHub: chalk.white.bold("     GitHub:"),
  labelLinkedIn: chalk.white.bold("   LinkedIn:"),
  labelProject: chalk.white.bold("    Project:"),
  labelWeb: chalk.white.bold("        Web:"),
  labelCard: chalk.white.bold("       Card:"),
};

const me = boxen(
  [
    `${data.name}`,
    "",
    `${data.labelWork}  ${data.work}`,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelLinkedIn}  ${data.linkedin}`,
    `${data.labelTwitter}  ${data.twitter}`,
    `${data.labelWeb}  ${data.web}`,
    "",
    `${data.labelCard}  ${data.npx}`,
    "",
    `${chalk.italic("I am currently looking for new opportunities.")}`,
    `${chalk.italic("My inbox is always open. Whether you have a")}`,
    `${chalk.italic("question or just want to say hi, I will try")}`,
    `${chalk.italic("my best to get back to you!")}`,
  ].join("\n"),
  {
    margin: 1,
    float: "center",
    padding: 1,
    borderStyle: "single",
    borderColor: "cyan",
  }
);

console.log(me);
const tip = [
  `Tip: Try ${chalk.cyanBright.bold("cmd/ctrl + click")} on the links above`,
  "",
].join("\n");
console.log(tip);

prompt(questions).then((answer) => answer.action());

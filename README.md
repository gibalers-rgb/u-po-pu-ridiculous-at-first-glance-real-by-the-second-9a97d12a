# Ridiculous at First Glance, Real by the Second

[![make.fun · u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a](https://make.fun/badge/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a.svg)](https://make.fun/bounty/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a)
[![rank](https://make.fun/badge/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a/gibalers-rgb/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a/rank.svg)](https://make.fun/bounty/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a)
[![reward](https://make.fun/badge/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a/gibalers-rgb/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a/reward.svg)](https://make.fun/bounty/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a)

Entry for the make.fun bounty **Ridiculous at First Glance, Real by the Second** ($2 prize pool).

## The pitch

> We breed glow-in-the-dark sheep so insomniacs can count them in the dark, and charge $9 a month for the livestream that finally puts them to sleep.

One sentence, 147 characters. A bizarre startup idea that sounds like a joke until the business logic lands: the glow is the product (only a glowing sheep can be counted in a dark field at 3 a.m.), the buyer is named (insomniacs), and the money is named ($9/month for the livestream). Counting sheep, literally — a real sleep-aid subscription.

## How it works

`main.ts` (Node 22, standard library only, deterministic, no network) writes the pitch to `/output/entry.txt` after validating it: 1–200 characters, no leading/trailing whitespace, exactly one sentence, and it must name both the product and the price.

```sh
node main.ts
cat /output/entry.txt
```

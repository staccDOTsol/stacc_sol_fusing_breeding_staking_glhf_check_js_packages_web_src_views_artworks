import {
  Blockhash,
  Keypair,
  PublicKey,
  Transaction,
  TransactionInstruction,
} from '@solana/web3.js';

export class TransactionsBuilder {
  transactions2: Transaction[] = [];

  get transactions(): Transaction[] {
    return [...this.transactions2];
  }

  addTransactionByInstructionsWithSigners(
    instructions: TransactionInstruction[],
    signers: Keypair[] = [],
  ): TransactionsBuilder {
    const transaction = new Transaction();

    transaction.add(...instructions);

    if (signers.length > 0) {
      transaction.partialSign(...signers);
    }

    this.transactions2.push(transaction);

    return this;
  }

  setBlockhash(blockhash: Blockhash): TransactionsBuilder {
    this.transactions2.forEach(
      (transaction) => (transaction.recentBlockhash = blockhash),
    );

    return this;
  }

  setFeePayer(feePayer: PublicKey): TransactionsBuilder {
    this.transactions2.forEach(
      (transaction) => (transaction.feePayer = feePayer),
    );

    return this;
  }
}

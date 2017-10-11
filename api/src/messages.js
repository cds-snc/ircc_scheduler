module.exports.default = {
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: {
      translation: {
        types: {
          receipt: {
            description: `A receipt for a purchase.`,
            receiptID: `The orderID from the request.`,
            referenceNumber: `The reference number is an 18 character string that references the terminal used to process the transaction as well as the shift, batch and sequence number, This data is typically used to reference transactions on the host systems and must be displayed on any receipt presented to the customer. This information should be stored by the merchant.`,
            responseCode: `The Transaction Response Code.
            < 50: Transaction approved 
            >= 50: Transaction declined.`,
            iso: `The ISO response code returned from the issuing institution.`,
            authCode: `The authorization code returned from the issuing institution.`,
            transactionTime: `The time stamp from the processing host (24 hour clock).`,
            transactionDate: `The processing hosts date stamp.`,
            transactionType: `Type of transaction that was performed:
            00 = Purchase, ACH Debit, Vault Credit Card Purchase, Vault ACH Purchase
            01 = Preauthorization, Vault Credit Card Pre-Authorization
            02 = Pre-Authorization Completion
            04 = Refund, Independent Refund, ACH Credit, Vault Credit Card & ACH Independent Refund
            11 = Purchase Correction, ACH Reversal`,
            complete: `Transaction was sent to authorization host and a response was received`,
            message: `Response description returned from issuing institution. This message should NOT be displayed on any cardholder facing materials.`,
            amount: `Returns the transaction amount from the request.`,
            cardType: `The type of card used in the transaction:
            M = MasterCard 
            V = Visa 
            AX = American Express 
            NO = Novus/Discover in (Canada only)
            DS= Discover (US only)
            C = JCB (US only)
            C1 = JCB (Canada only)
            SE = Sears (Canada only)
            CQ = ACH (US only)
            P = Pin Debit (US only)
            D = Debit (Canada only)`,
            transactionID: `The Gateway Transaction identifier. This field is required for any future follow-on transactions such as Refunds, Corrections, Completions, Reversals, etc.`,
            timedOut: `Indicates if a transaction failed due to a process timing out.`,
            bankTotals: `Reserved field for API Batch Close / Open Totals.`,
            ticket: ` Reserved field.`,
            corporateCard: `Corporate Card`,
            cardLevelResult: `Card level result`,
            cavvResultCode: `Cardholder Authentication Verification Value result code.`,
          },
          pan: {
            description: `A Primary Account Number aka: a credit card number`,
          },
          expiryYear: {
            description: `The year the card expires in the format YY.`,
          },
          expiryMonth: {
            description: `The month the card expires in the format MM.`,
          },
        },
        mutation: {
          fields: {
            purchase: {
              description: `Initiate a purchase.`,
              args: {
                description: `Merchant defined description sent on a per-transaction basis that will appear on the credit card statement.`,
                pan: `A Credit Card Number with no spaces or dashes.`,
                expiryYear: `The year the card expires in the format YY.`,
                expiryMonth: `The month the card expires in the format MM.`,
                amount: `The amount of the the transaction.`,
                orderID: `A merchant defined unique transaction identifier - must be unique for every Purchase, PreAuth and Independent Refund attempt.`,
              },
            },
          },
        },
      },
    },
    fr: {
      translation: {
        types: {
          receipt: {
            description: `Un reçu pour un achat.`,
            receiptID: `Le orderID de la demande.`,
            referenceNumber: `Le numéro de référence est une chaîne de 18 caractères qui fait référence au terminal utilisé pour traiter la transaction ainsi que le changement, le lot et le numéro de séquence, ces données est généralement utilisé pour référencer les transactions sur les systèmes hôtes et doit être affiché sur tout reçu présenté au client. Cette information devrait être stocké par le marchand.`,
            responseCode: `Le code de réponse aux transactions.
            <50: transaction approuvée
            > = 50: transaction refusée.`,
            iso: `Le code de réponse ISO est retourné de l'établissement émetteur.`,
            authCode: `Le code d'autorisation retourné par l'établissement émettant.`,
            transactionTime: `L'horodatage de l'hôte de traitement (horloge 24 heures).`,
            transactionDate: `Le traitement héberge le tampon de date.`,
            transactionType: `Type de transaction effectuée:
            00 = Achat, débit ACH, achat de carte de crédit Vault, coffre-fort Achat ACH
            01 = Préautorisation, préautorisation de carte de crédit de coffre-fort
            02 = Achèvement de l'autorisation préalable
            04 = Remboursement, Remboursement indépendant, Crédit ACH, Carte de crédit Vault et ACH Remboursement indépendant
            11 = Correction d'achat, inversion ACH`,
            complete: `La transaction a été envoyée à l'hôte d'autorisation et une réponse a été reçue`,
            message: `La description de la réponse est revenue de l'établissement émetteur. Ce message NE DOIT PAS être affiché sur les matériaux faisant face à un titulaire de carte.`,
            amount: `Renvoie le montant de la transaction à partir de la demande.`,
            cardType: `Le type de carte utilisé dans la transaction:
            M = MasterCard
            V = visa
            AX = American Express
            NO = Novus / Discover in (Canada seulement)
            DS = Discover (États-Unis seulement)
            C = JCB (États-Unis uniquement)
            C1 = JCB (Canada seulement)
            SE = Sears (Canada seulement)
            CQ = ACH (États-Unis seulement)
            P = Débit de broche (US uniquement)
            D = Débit (Canada seulement)`,
            transactionID: `L'identifiant de transaction Gateway. Ce champ est requis pour les futures opérations de suivi telles que les remboursements, les corrections, les compléments, les renvois, etc.`,
            timedOut: `Indique si une transaction a échoué en raison d'un dépassement de processus.`,
            bankTotals: `Champ réservé pour les totaux Close / Open de lot d'API.`,
            ticket: `Un champ réservé`,
            corporateCard: `Carte d'entreprise`,
            cardLevelResult: `Résultat du niveau carte`,
            cavvResultCode: `Cardholder Authentication Verification Value code de résultat.`,
          },
          pan: {
            description: `Un numéro de compte principal, également connu sous le nom de numéro de carte de crédit`,
          },
          expiryYear: {
            description: `L'année à laquelle la carte expire au format YY`,
          },
          expiryMonth: {
            description: `Le mois auquel la carte expire au format MM`,
          },
        },
        mutation: {
          fields: {
            purchase: {
              description: `Lancer un achat.`,
              args: {
                description: `La description définie par le marchant est envoyée par transaction qui apparaissent sur le relevé de carte de crédit.`,
                pan: `Un numéro de carte de crédit sans espaces ni tirets.`,
                expiryYear: `L'année à laquelle la carte expire au format YY.`,
                expiryMonth: `Le mois auquel la carte expire au format MM.`,
                amount: `Le montant de la transaction.`,
                orderID: `Un identificateur de transaction unique défini par le commerçant - doit être unique pour chaque tentative d'achat, de pré-autorisation et de remboursement indépendant.`,
              },
            },
          },
        },
      },
    },
  },
}

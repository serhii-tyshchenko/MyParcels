class API {
  apiKey: string;
  baseUrl: string;
  constructor(apiKey = '') {
    this.apiKey = apiKey;
    this.baseUrl = 'https://api.novaposhta.ua/v2.0/json/';
  }

  getParcelInfo = (parcelNumber: string, receiverPhone: string = '') =>
    fetch(this.baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        apiKey: this.apiKey,
        modelName: 'TrackingDocument',
        calledMethod: 'getStatusDocuments',
        methodProperties: {
          Documents: [
            {
              DocumentNumber: parcelNumber,
              Phone: receiverPhone,
            },
          ],
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => data);
}

export default new API();

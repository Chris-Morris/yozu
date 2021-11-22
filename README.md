# Yozu Notes
___

## Server
___

### Dependencies

1. Concurrently 
```JSON
"dev": "concurrently \"npm run server\" \"npm run client\"",
```

```JSON
"dependencies": {
    "concurrently": "^6.4.0",
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "mongodb": "^4.2.0"
  }
```

___
```javascript
const express = require('express');
const app = express();
```


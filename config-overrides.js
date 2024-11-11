module.exports = function override(config, env) {
    // Remplacer les options dépréciées par setupMiddlewares
    if (config.devServer) {
      config.devServer.setupMiddlewares = (middlewares, devServer) => {
        // Ajoutez vos middlewares personnalisés ici si nécessaire
        return middlewares;
      };
    }
  
    return config;
  };
  
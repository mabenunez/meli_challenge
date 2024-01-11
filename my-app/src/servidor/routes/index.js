var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET */
router.get('/api/items', function(req, res) {
  const search = req.query.q;
  axios.get("https://api.mercadolibre.com/sites/MLA/search?q=" + search + "&limit=4")
  .then (function (resultado) {
    let list = [];
    for (let i = 0; i < resultado.data.results.length; i++) {
      let item = {
        title: resultado.data.results[i].title  || '',
        price: resultado.data.results[i].price  || '', 
        thumbnail: resultado.data.results[i].thumbnail  || '',
        id: resultado.data.results[i].id  || '',
        currency: resultado.data.results[i].currency_id  || '',
        address: resultado.data.results[i].address.state_name  || '',
        shipping: resultado.data.results[i].shipping.free_shipping  || '',

        
      }
      list.push(item)
    }
    let breadcrumbObj = resultado.data.filters[0].values[0].path_from_root.map(b => b.name)
    res.json({
      items: list,
      categories: breadcrumbObj
    });
  })
})

/* GET WITH DESCRIPTION*/
router.get('/api/items/:id', function (req, res) {
  const id = req.params.id

  axios.get('https://api.mercadolibre.com/items/' + id)
    .then(resultado => {

      axios.get(' https://api.mercadolibre.com/items/' + id + '/description')
        .then(detail => {

          axios.get("https://api.mercadolibre.com/categories/" + resultado.data.category_id )
            .then(infoCat => {

              const descript = detail.data

              let productoDetalle = {
                title: resultado.data.title || '',
                price: resultado.data.price || '',
                category: resultado.data.category_id || '',
                condition: resultado.data.condition || '',
                sold: resultado.data.sold_quantity || '',
                thumbnail: resultado.data.pictures[0].url || '',
                description: descript.plain_text || '',

                breadcrumb: infoCat.data.path_from_root.map(u => {
                  return u.name
                })
              }
              res.json(productoDetalle)
            })
          
        })
    }
    )
})

module.exports = router;


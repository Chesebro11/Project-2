const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

router.get('/', (req, res) => {
    // console log session when thats created for testing
    Post.findAll({
        attributes: [
            'id',
            'post_content',
            'title',
            'created_at',
            // Sequelize connection for votes when created
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get ({ plain: true }));
        res.render('homepage', { posts });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// create login route
router.get('/login', (req,res) => {
    res.render('login')
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
res.render('login');
});

//post template render 
router.get('/post/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id', 
            'post_content',
            'title',
            'created_at',
            [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
        ],
        include: [
            {
              model: Comment,
              attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
              include: {
                model: User,
                attributes: ['username']
              }
            },
            {
              model: User,
              attributes: ['username']
            }
          ]
        })
          .then(dbPostData => {
            if (!dbPostData) {
              res.status(404).json({ message: 'No post found with this id' });
              return;
            }
      
            // serialize the data
            const post = dbPostData.get({ plain: true });
      
            // pass data to template
            res.render('single-post', {
            post, 
           loggedIn: req.session.loggedIn     
        });
          })
          .catch(err => {
            console.log(err);
            res.status(500).json(err);
          });
      });

      //Creating post route
      router.get('/create-post', (req,res) => {
        if (req.session.loggedIn) {
            res.redirect('/');
            return;
        }
    res.render('create-post');
    });
      


  
  
module.exports = router;
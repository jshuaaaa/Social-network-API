const router = require('express').Router();

const {
  getAllThought,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction
} = require('../../controllers/thought-controller');


router.route('/').get(getAllThought).post(createThought);

// Set up GET one, PUT, and DELETE at /api/thoughts/:id
router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);

// Post at /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(createReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;
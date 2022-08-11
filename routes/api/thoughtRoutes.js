const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addThoughtReaction,
  removeThoughtReaction,
} = require('../../controllers/thoughtController');

// /api/users
router.route('/')
.get(getThoughts)
.post(createThought);

// /api/users/:userId
router.route('/:thoughtId')
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought);

// /api/users/:userId/friends/:friendId
router.route('/:thoughtId/reactions')
.post(addThoughtReaction)

// /api/users/:userId/friends/:friendId
router.route('/:thoughtId/reactions/:reactionId')
.delete(removeThoughtReaction)

module.exports = router;
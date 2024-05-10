const mongoose = require('mongoose');

const ModuleSchema = new mongoose.Schema({
  _id: String,
  chapters: mongoose.Schema.Types.Mixed,
  // videoSets:Array[String],
  moduleType: {
    type: String,
    enum: ['OPEN', 'CLOSED']
  },
  totalQuestions: Number
});

ModuleSchema.pre('save', async (next) => {
  console.log('at presave');
  // change moduleType to closed when question is added
  next();
});

module.exports = mongoose.model('Module', ModuleSchema);
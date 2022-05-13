# A computer vision technique of detecting Hardhat for the safety of construction workers

### Research Aim

#### A balanced training dataset with diverse representation of the objects can enhance the model performance

### Abstract

Working in construction production is supposed to be one of the dangerous professions with
the highest safety risk factor due to the complex interaction of workers with equipment.
Therefore, most worker's safety regulations concern the correct use of personal protective
equipment (PPE), especially hardhat to protect the workers from fatal injuries or most
importantly brain damage. Therefore, computer vision techniques on automatic hardhat-
wearing detection can reduce on-site fatal injuries.

To enhance the worker's safety, most of the recent studies used public datasets. However,
these methods still have limitations in the context of the diverse representation of desired
objects into the dataset that can improve the model performance detecting the variety of the
objects available on-site image captures. This research presents how to prepare a balanced
dataset by using the combination of image augmentation features and on-site learning
examples that can increase the positive and negative features of the desired objects.

In this study, model YOLOv5 was used to train on the enhanced custom dataset. The improved
resultant model achieved 0.890 mAP according to the training logs and achieved a 97% success
rate in manual testing on the test dataset captured from the construction site, which
outperforms several state-of-the-art methods on a public dataset.

### Folder structure

yolov5 -- Open source yolov5 object detection model.

flask-app -- Flask inference app.

imgaug.ipynb -- Image augmentation notebook file.

csct-master-dissertation-report.pdf -- Dissertation report.

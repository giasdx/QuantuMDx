from re import DEBUG, sub
from flask import Flask, render_template, request
from werkzeug.utils import secure_filename
import os
import subprocess

app = Flask(__name__)

uploads_dir = os.path.join(app.instance_path, 'uploads')
model = 'hardhat.pt'

os.makedirs(uploads_dir, exist_ok=True)

@app.route("/")
def home():
    return render_template('index.html')


@app.route("/detect", methods=['POST'])
def detect():
    if not request.method == "POST":
        return
    
    # Get form data
    file = request.files['file']
    conf = request.form['conf']
    ovl = request.form['ovl']
    
    
    file.save(os.path.join(uploads_dir, secure_filename(file.filename)))
    
    # Execute detect.py to produce the resultant image and equivelant boundary box information.
    subprocess.run(['python3', 'detect.py', '--source', os.path.join(uploads_dir, secure_filename(file.filename)), '--conf-thres', conf, '--iou-thres', ovl, '--weights', model, '--augment'])
    
    obj = secure_filename(file.filename)
    
    return obj




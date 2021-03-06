"""empty message

Revision ID: 5c733d6f9701
Revises: 
Create Date: 2022-04-04 15:37:24.608000

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '5c733d6f9701'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('plant',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('scientific_name', sa.String(length=250), nullable=False),
    sa.Column('common_name', sa.String(length=250), nullable=False),
    sa.Column('size', sa.String(length=50), nullable=False),
    sa.Column('height', sa.String(length=50), nullable=False),
    sa.Column('blooms', sa.String(length=250), nullable=False),
    sa.Column('seasonal', sa.String(length=250), nullable=False),
    sa.Column('growth_period', sa.String(length=250), nullable=False),
    sa.Column('light_exposure', sa.String(length=250), nullable=False),
    sa.Column('most_suitable_location', sa.Text(), nullable=False),
    sa.Column('temperature', sa.String(length=50), nullable=False),
    sa.Column('plant_image', sa.Text(), nullable=False),
    sa.Column('water_req', sa.String(length=50), nullable=False),
    sa.Column('water_tips', sa.Text(), nullable=False),
    sa.Column('water_day', sa.Integer(), nullable=False),
    sa.Column('fertilizer_req', sa.String(length=250), nullable=False),
    sa.Column('fertilizer_tips', sa.Text(), nullable=False),
    sa.Column('poisonous', sa.Text(), nullable=False),
    sa.Column('plant_details', sa.Text(), nullable=False),
    sa.Column('plant_care_tips', sa.Text(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('first_name', sa.String(length=70), nullable=False),
    sa.Column('last_name', sa.String(length=70), nullable=False),
    sa.Column('phone', sa.String(length=30), nullable=False),
    sa.Column('sms_checkbox', sa.Boolean(), nullable=False),
    sa.Column('zipcode', sa.String(length=15), nullable=False),
    sa.Column('profile_image', sa.String(length=250), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('favorites',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('plant_id', sa.Integer(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('list_name', sa.String(length=40), nullable=True),
    sa.ForeignKeyConstraint(['plant_id'], ['plant.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('favorites')
    op.drop_table('user')
    op.drop_table('plant')
    # ### end Alembic commands ###
